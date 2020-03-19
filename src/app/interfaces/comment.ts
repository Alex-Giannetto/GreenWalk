import { Person, PersonTestExample } from './person'

export interface Comment {
	id: string
	datetime: string
	author: Person
	text: string
}

export const CommentTestExample: Comment = {
	id: 'id',
	datetime: '1970-01-01 00:00:00',
	author: PersonTestExample,
	text: 'text'
}
