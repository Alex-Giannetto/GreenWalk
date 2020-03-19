import { Person, PersonTestExample } from './person'

export interface GreenWalkLight {
	id: string
	name: string
	datetime: string
	location: {
		latitude: number,
		longitude: number,
	}
	author: Person
	participant: Person[]
}

export const GreenWalkLightTestExample: GreenWalkLight = {
	id: 'id',
	name: 'name',
	datetime: '1970-01-01',
	location: {
		latitude: 0,
		longitude: 0,
	},
	author: PersonTestExample,
	participant: [PersonTestExample, PersonTestExample]
}
