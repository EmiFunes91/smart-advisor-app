from fastapi import APIRouter, HTTPException, Depends
from sqlalchemy.orm import Session
from typing import List
import traceback

from app.models.schemas import AskRequest, AskResponse, AskHistoryItem
from app.services.openai_service import get_openai_response
from app.db.models import Interaction
from app.db.deps import get_db

router = APIRouter()

@router.post("/", response_model=AskResponse)
async def ask_ai(payload: AskRequest, db: Session = Depends(get_db)):
    try:
        # Primero intentamos obtener la respuesta
        answer = await get_openai_response(payload.question)
        
        try:
            # Luego intentamos guardar en la base de datos
            interaction = Interaction(
                question=payload.question,
                answer=answer
            )
            db.add(interaction)
            db.commit()
        except Exception as db_error:
            # Si hay error en la base de datos, lo registramos pero devolvemos la respuesta
            print(f"Error de base de datos: {str(db_error)}")
            print(traceback.format_exc())
            # No re-lanzamos el error para que al menos el usuario reciba una respuesta
        
        return AskResponse(answer=answer)

    except Exception as e:
        print(f"Error general: {str(e)}")
        print(traceback.format_exc())
        raise HTTPException(
            status_code=500, 
            detail=f"Error del servidor: {str(e)}"
        )

@router.get("/history", response_model=List[AskHistoryItem])
def get_history(db: Session = Depends(get_db)):
    try:
        interactions = db.query(Interaction).order_by(Interaction.created_at.desc()).all()
        return interactions
    except Exception as e:
        print(f"Error al obtener historial: {str(e)}")
        print(traceback.format_exc())
        raise HTTPException(
            status_code=500, 
            detail=f"Error de base de datos: {str(e)}"
        )
