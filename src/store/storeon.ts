import { createStoreon } from 'storeon'

import type { TracingEvent, TracingState } from './trace'
import { tracingModule } from './trace'

import type { ProfileEditEvent, ProfileEditState } from './profileEdit'
import { profileEditModule } from './profileEdit'
import type { RegisterEvent, RegisterState } from './register'
import { registerModule } from './register'

type States = TracingState & ProfileEditState & RegisterState
type Events = TracingEvent & ProfileEditEvent & RegisterEvent

export const store = createStoreon<States, Events>([
  tracingModule,
  profileEditModule,
  registerModule,
])
