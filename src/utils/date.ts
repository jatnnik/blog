export type DateContext = 'post' | 'list'

const listFormatter = new Intl.DateTimeFormat('en', {
  day: '2-digit',
  month: '2-digit',
  year: 'numeric',
})

export const formatDate = (value: Date, context: DateContext): string => {
  switch (context) {
    case 'list':
      const parts = listFormatter.formatToParts(value)
      const ymd = [parts.at(4)?.value, parts.at(0)?.value, parts.at(2)?.value]

      return ymd.join('.')
    default:
      return value.toLocaleDateString('en-US')
  }
}
