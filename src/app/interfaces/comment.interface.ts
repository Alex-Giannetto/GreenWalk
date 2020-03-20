import { PersonInterface, PersonTestExample } from './person.interface'

export interface CommentInterface {
	id: string
	datetime: string
	author: PersonInterface
	text: string
}

export const CommentTestExample: CommentInterface = {
	id: 'id',
	datetime: '1970-01-01 00:00:00',
	author: PersonTestExample,
	text: 'text'
}
