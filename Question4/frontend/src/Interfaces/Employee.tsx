export default interface IEmployee {
  id: Number | null
  name: String
  username: String
  address: {
    street?: String
    suite?: String
    city: String
    zipcode?: String
    geo?: {
      lat: GLfloat
      lng: GLfloat
    }
  }
  phone: String
  website: String
  company?: {
    name: String
    catchphrase: String
    bs: String
  }
}
