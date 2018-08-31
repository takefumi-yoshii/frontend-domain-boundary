import { getDateLabel } from '../../helpers/date'
function tick(date: Date) {
  return { label: getDateLabel(date) }
}
export const TimerAC = { tick }
