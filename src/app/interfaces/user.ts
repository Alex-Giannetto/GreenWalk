import { Person, PersonTestExample } from './person'

export interface User extends Person {
	email: string
	token: string
	birthDate: string
}

export const UserTestExample: User = {
	...PersonTestExample,
	email: 'email@email.email',
	token: 'token',
	birthDate: '1970-01-01'
}
