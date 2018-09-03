import { getDateLabel } from '../../models/TodoItem'
function tick(date: Date) {
  return { label: getDateLabel(date) }
}
export const TimerAC = { tick }
