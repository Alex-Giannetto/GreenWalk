import { Person } from './person'

export interface Comment {
	id: string
	datetime: string
	author: Person
	text: string
}
