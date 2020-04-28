export type NameType = {
  en: string
  fi: string
  sv?: string
}

export type SourceType = {}

export type LocationType = {
  lat: number
  lon: number
  address: AddressType
}

export type AddressType = {
  street_address: string
  postal_code: string
  locality: string
}

export type DescriptionType = {
  intro?: string
  body?: string
  images?: ImageType[]
}

export type ImageType = {
  url?: string
  copyright_holder?: string
  license_type?: LicenseType
}

export type LicenseType = {
  id: number
  name: string
}

export type EventDateType = {
  starting_day: string
  ending_day?: string
  additional_description?: MoreDesType | null
}

export type MoreDesType = {
  lang_code: string
  text: string
}

export type TagType = {
  id: string
  name: string
}
