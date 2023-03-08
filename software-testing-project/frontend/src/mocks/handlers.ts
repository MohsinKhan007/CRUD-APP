import { rest } from 'msw'
import IEmployee from '../Interfaces/Employee'

const MockData: IEmployee[] = [
  {
    id: 1000,
    name: 'Muhammad Mohsin',
    dept: 'finance',
    phone: '0729229664',
    email: 'mohsinwaseem65@gmail.com',
  },
  {
    id: 9090,
    name: 'Mujeeb Ali',
    dept: 'driving',
    phone: '090078601',
    email: 'ali.mujeebali100@gmail.com',
  },
  {
    id: 8786,
    name: 'Syed Ali Hasan',
    dept: 'Tech',
    phone: '987652512',
    email: 'syal22@gmail.com',
  },
  {
    id: 5427,
    name: 'Muhammad Shahzaib',
    dept: 'Tech',
    phone: '987652512',
    email: 'MuhammadShahzaib22@gmail.com',
  },
]

export const handlers = [
  rest.get(
    'http://localhost:8082/api/Employees/getAll',
    (req, res, ctx) => {
      console.log('Request, Response')
      return res(ctx.status(200), ctx.json(MockData))
    }
  ),
]
