const formatter = new Intl.DateTimeFormat("en", {
  day: "numeric",
  month: "long",
  year: "numeric",
})

export const formatDate = (value: Date): string => formatter.format(value)
