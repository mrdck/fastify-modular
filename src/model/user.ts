export interface User {
  id: string
  name: string
  passwordSalt: string
  hashedPassword: string
}
