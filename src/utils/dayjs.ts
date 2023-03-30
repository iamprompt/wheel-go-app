import dayjs from 'dayjs'
import 'dayjs/locale/th'
import 'dayjs/locale/en'
import buddhistEra from 'dayjs/plugin/buddhistEra'

dayjs.extend(buddhistEra)

export default dayjs
