import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: Date) {
  return Intl.DateTimeFormat('en-GB', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date)
}

export function readingTime(html: string) {
  const articleText = html.replace(/<[^>]+>/g, '')
  const wordCount = articleText.split(/\s+/).length
  const readingSpeed = 200
  const readingTimeMinutes = (wordCount / readingSpeed + 1).toFixed()
  return `${readingTimeMinutes} min read`
}