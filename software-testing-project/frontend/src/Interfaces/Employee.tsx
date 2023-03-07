// Defining the Object Employee Interface
// the interface helps us in defining the state in the app and to communicate with backend
export default interface IEmployee {
  id: number
  name: string
  dept: string
  email: string
  phone: string
}
export const initialValue: IEmployee = {
  id: -1,
  name: '',
  dept: '',
  email: '',
  phone: '',
}

export const initialValueArray: Array<IEmployee> = [
  {
    id: -1,
    name: '',
    dept: '',
    email: '',
    phone: '',
  },
]
