import { createStoreon } from 'storeon'

import type { TracingEvent, TracingState } from './trace'
import { tracingModule } from './trace'

import type { ProfileEditEvent, ProfileEditState } from './profileEdit'
import { profileEditModule } from './profileEdit'

type States = TracingState & ProfileEditState
type Events = TracingEvent & ProfileEditEvent

export const store = createStoreon<States, Events>([
  tracingModule,
  profileEditModule,
])
