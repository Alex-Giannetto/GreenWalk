import { Person } from './person'

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
