export function formatDate(dateString: string, locale = 'es-AR'): string {
    return new Intl.DateTimeFormat(locale, {
      dateStyle: 'medium',
      timeStyle: 'short',
    }).format(new Date(dateString));
  }  