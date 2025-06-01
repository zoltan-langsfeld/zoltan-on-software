export function formatDate(date: Date) {
  return Intl.DateTimeFormat('en-GB', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date)
}

// export function readingTime(html: string) {
//   const textOnly = html.replace(/<[^>]+>/g, '')
//   const wordCount = textOnly.split(/\s+/).length
//   const readingTimeMinutes = (wordCount / 200 + 1).toFixed()
//   return `${readingTimeMinutes} min read`
// }