import { Person } from './person'

export interface User extends Person {
	email: string
	token: string
	birthDate: string
}
