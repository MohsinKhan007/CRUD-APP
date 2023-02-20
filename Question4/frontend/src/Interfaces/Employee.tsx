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
