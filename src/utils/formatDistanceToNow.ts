import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

export function distanceToNow(date: Date): string {
  return formatDistanceToNow(date, {addSuffix: true, locale: ptBR})
}