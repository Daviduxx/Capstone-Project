export interface iUser {
  id: number
  name: string
  surname: string
  birthday: string
  username: string
  email: string
  phoneNumber: string
  password: string
  date: string
  roles: Role[]
  address: Address
  licences: any[]
  dives: Dfe[]
  bannerImage: string
  profileImage: string
}

export interface Role {
  id: number
  roleName: string
}

export interface Address {
  id: number
  address: string
  postalCode: string
  city: string
  state: string
}

export interface Dfe {
  id: number
  name: string
  date: any
  type: string
  maxDepth: number
  diveTime: number
  waterType: string
  waterTaste: string
  weather: string
  airTemperature: number
  surfaceTemperature: number
  deepTemperature: number
  visibility: string
  waves: string
  current: string
  suit: string
  ballast: number
  tank: string
  tankSize: number
  gasMix: string
  initialPressure: number
  finalPressure: number
  usedAir: number
  judgement: string
  notes: string
  buddy: string
  certified: boolean
}
