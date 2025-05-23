from sqlalchemy import text
from app.db.database import engine
from app.db.models import Base
import traceback

def init_db():
    try:
        # Intentar crear las tablas
        Base.metadata.create_all(bind=engine)
        print("Base de datos inicializada correctamente")
        
        # Verificar la conexión
        with engine.connect() as conn:
            result = conn.execute(text("SELECT 1"))
            print("Conexión a la base de datos verificada")
            
    except Exception as e:
        print(f"Error al inicializar la base de datos: {str(e)}")
        print(traceback.format_exc())
        raise

if __name__ == "__main__":
    init_db()