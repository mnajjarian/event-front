export const formatDate = (date: string): string =>
  new Intl.DateTimeFormat('en-us', {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
  }).format(new Date(date))
