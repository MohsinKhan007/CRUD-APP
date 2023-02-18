export default interface IEmployee {
  id: string
  name: string
  username: string
  email: string
  address: {
    street?: string
    suite?: string
    city: string
    zipcode?: string
    geo?: {
      lat: string
      lng: string
    }
  }
  phone: string
  website: string
  company?: {
    name: string
    catchphrase: string
    bs: string
  }
}
export const initialValue: IEmployee = {
  id: '',
  name: '',
  username: '',
  email: '',
  address: {
    street: '',
    suite: '',
    city: '',
    zipcode: '',
    geo: {
      lat: '',
      lng: '',
    },
  },
  phone: '',
  website: '',
  company: {
    name: '',
    catchphrase: '',
    bs: '',
  },
}
