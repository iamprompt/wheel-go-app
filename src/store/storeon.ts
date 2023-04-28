import { createStoreon } from 'storeon'
import type { TracingEvent, TracingState } from './trace'
import { tracingModule } from './trace'

type States = TracingState
type Events = TracingEvent

export const store = createStoreon<States, Events>([tracingModule])
