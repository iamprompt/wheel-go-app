import type { ComponentProps } from 'react'
import { FormatEnum, format } from '~/utils/dayjs'
import type { MaterialIcons } from '~/utils/icons/MaterialIcons'

interface SummaryDetail {
  label: string
  value: string
  key: string
  icon: ComponentProps<typeof MaterialIcons>['name']
  format?: (value: string) => string
  unit?: string
}

export const SUMMARY_DETAILS: Array<SummaryDetail> = [
  {
    key: 'distance',
    label: 'profile.summary_details.total_distance',
    value: '10.5 กิโลเมตร',
    icon: 'accessible_forward',
    unit: 'kilometers',
  },
  {
    key: 'routes',
    label: 'profile.summary_details.total_routes',
    value: '10 เส้นทาง',
    icon: 'draw',
    unit: 'routes',
  },
  {
    key: 'reviews',
    label: 'profile.summary_details.total_reviews',
    value: '10 รีวิว',
    icon: 'rate_review',
    unit: 'reviews',
  },
  {
    key: 'joinedAt',
    label: 'profile.summary_details.joined_at',
    value: '1 เม.ย. 2566',
    icon: 'access_time_filled',
    format: (value) => format(value, [FormatEnum.DATE]),
  },
]
