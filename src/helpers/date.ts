export function toDateLabel(date: Date) {
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()
  return `${hour}:${minute}:${second}`
}
