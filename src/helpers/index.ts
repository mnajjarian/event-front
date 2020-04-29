import { TagType } from '../types'

export const formatDate = (date: string | null): string | null => {
  if (date === null) {
    return null
  }
  return new Intl.DateTimeFormat('en-us', {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  }).format(new Date(date))
}

export const sortByTag = (array: any[], str: string): any[] => {
  return array.reduce((acc, curr) => {
    if (curr.tags.filter((tag: TagType) => tag.name === str).length > 0) {
      acc.push(curr)
    }
    return acc
  }, [])
}
