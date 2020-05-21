import { GreenWalkLightInterface, GreenWalkLightTestExample } from './green-walk-light.interface'
import { LocationTestExample } from './location.interface'

export interface GreenWalkInterface extends GreenWalkLightInterface {
	description?: string
	state: boolean
	comments?: Comment[]
}

export const GreenWalkTestExample: GreenWalkInterface = {
	...GreenWalkLightTestExample,
	description: 'description',
	location: LocationTestExample,
	state: true,
	comments: []
}
