const formatter = new Intl.DateTimeFormat('en-CA', {
  day: '2-digit',
  month: '2-digit',
  year: 'numeric',
})

export const formatDate = (value: Date): string => formatter.format(value)
