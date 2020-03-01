import { Person } from './person'

export interface User extends Person {
	mail: string
	token: string
	birthDate: string
}
