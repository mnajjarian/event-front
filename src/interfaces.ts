import { NameType, SourceType, LocationType, DescriptionType, EventDateType, TagType } from './types'

export interface EventInterface {
  __typename?: string
  id: string
  name: NameType
  source_type?: SourceType
  info_url?: string | null
  modified_at?: string
  location?: LocationType
  description?: DescriptionType
  event_dates?: EventDateType
  tags: TagType[]
}
