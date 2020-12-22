import { parseISO, format } from 'date-fns'
import { tr } from 'date-fns/locale'

export default function Date({ dateString }) {
    const date = parseISO(dateString)
    return <time dateTime={dateString}>{format(date, 'd LLLL, yyyy', {locale: tr})}</time>
}