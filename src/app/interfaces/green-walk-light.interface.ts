import { PersonInterface, PersonTestExample } from './person.interface'

export interface GreenWalkLightInterface {
	id: string
	name: string
	datetime: string
	location: {
		latitude: number,
		longitude: number,
	}
	author: PersonInterface
	participant: PersonInterface[]
}

export const GreenWalkLightTestExample: GreenWalkLightInterface = {
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
