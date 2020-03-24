import { PersonInterface, PersonTestExample } from './person.interface'
import { CoordinatesInterface, CoordinatesTestExemple } from './coordinates.Interface'
import { LocationInterface } from './location.interface'

export interface GreenWalkLightInterface {
	id: string
	name: string
	datetime: string
	location: LocationInterface | CoordinatesInterface
	author: PersonInterface
	participant: PersonInterface[]
}

export const GreenWalkLightTestExample: GreenWalkLightInterface = {
	id: 'id',
	name: 'name',
	datetime: '1970-01-01',
	location: CoordinatesTestExemple,
	author: PersonTestExample,
	participant: [PersonTestExample, PersonTestExample]
}
