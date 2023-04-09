import type { ComponentProps } from 'react'
import type { MaterialIcons } from '~/utils/icons/MaterialIcons'

interface SummaryDetail {
  label: string
  value: string
  icon: ComponentProps<typeof MaterialIcons>['name']
}

export const SUMMARY_DETAILS: Array<SummaryDetail> = [
  {
    label: 'profile.summary_details.total_distance',
    value: '10.5 กิโลเมตร',
    icon: 'accessible_forward',
  },
  {
    label: 'profile.summary_details.total_routes',
    value: '10 เส้นทาง',
    icon: 'draw',
  },
  {
    label: 'profile.summary_details.total_places',
    value: '10 สถานที่',
    icon: 'place',
  },
  {
    label: 'profile.summary_details.total_reviews',
    value: '10 รีวิว',
    icon: 'rate_review',
  },
  {
    label: 'profile.summary_details.joined_at',
    value: '1 เม.ย. 2566',
    icon: 'access_time_filled',
  },
]
