import { PersonInterface, PersonTestExample } from './person.interface'

export interface UserInterface extends PersonInterface {
	email: string
	token: string
	birthDate: string
}

export const UserTestExample: UserInterface = {
	...PersonTestExample,
	email: 'email@email.email',
	token: 'token',
	birthDate: '1970-01-01'
}
