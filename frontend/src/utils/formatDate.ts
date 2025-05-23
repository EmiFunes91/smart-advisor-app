export function formatDate(dateString: string, locale = 'es-AR'): string {
  try {
    // Asegurarnos de que la fecha sea válida
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      return 'Fecha no disponible';
    }
    
    return new Intl.DateTimeFormat(locale, {
      dateStyle: 'medium',
      timeStyle: 'short',
    }).format(date);
  } catch (error) {
    console.error('Error al formatear fecha:', error);
    return 'Fecha no disponible';
  }
}  