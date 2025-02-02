import dayjs from 'dayjs'
import tz from 'dayjs/plugin/timezone.js'
import utc from 'dayjs/plugin/utc.js'

dayjs.extend(tz)
dayjs.extend(utc)

export const selfDayjs = (time) => dayjs(time).utc().tz('Asia/Shanghai')

export const timeZone = () => dayjs.tz.setDefault('Asia/Shanghai')
