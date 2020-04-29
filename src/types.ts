export type NameType = {
  en: string | null
  fi: string
  sv: string | null
  zh: string | null
}

export type SourceType = {}

export type LocationType = {
  lat: number
  lon: number
  address: AddressType
}

export type AddressType = {
  street_address: string | null
  postal_code: string | null
  locality: string | null
}

export type DescriptionType = {
  intro?: string
  body?: string
  images?: ImageType[]
}

export type ImageType = {
  url: string | null
  copyright_holder: string | null
  license_type: LicenseType | null
}

export type LicenseType = {
  id: number
  name: string
}

export type EventDateType = {
  starting_day: string | null
  ending_day: string | null
  additional_description: MoreDesType | null
}

export type MoreDesType = {
  lang_code: string
  text: string
}

export type TagType = {
  id: string
  name: string
}
