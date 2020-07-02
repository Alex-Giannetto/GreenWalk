import { PersonInterface, PersonTestExample } from './person.interface'
import { LocationInterface, LocationTestExample } from './location.interface'

export interface GreenWalkLightInterface {
	id: string
	name: string
	datetime: string
	location: LocationInterface
	author: PersonInterface
	participants: PersonInterface[]
}

export const GreenWalkLightTestExample: GreenWalkLightInterface = {
	id: 'id',
	name: 'name',
	datetime: '1970-01-01',
	location: LocationTestExample,
	author: PersonTestExample,
	participants: [PersonTestExample, PersonTestExample]
}
