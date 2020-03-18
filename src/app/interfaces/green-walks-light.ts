import { Person } from './person'

export interface GreenWalksLight {
	id: string
	name: string
	datetime: string
	location: {
		latitude: number
		longitude: number
		image: string
	}
	author: Person
	participant: Person[]
}
