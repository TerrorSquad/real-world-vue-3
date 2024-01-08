// Contain all types we need for the project

export interface EventItem {
  id: number
  category: string
  title: string
  description: string
  location: string
  date: string
  time: string
  organizer: string
}

export interface GStoreType {
  flashMessage: string
}
