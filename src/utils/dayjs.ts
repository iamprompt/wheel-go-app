import dayjs from 'dayjs'
import 'dayjs/locale/th'
import 'dayjs/locale/en'
import buddhistEra from 'dayjs/plugin/buddhistEra'
import duration from 'dayjs/plugin/duration'

dayjs.extend(buddhistEra)
dayjs.extend(duration)

export default dayjs
