import { GreenWalkLightInterface, GreenWalkLightTestExample } from './green-walk-light.interface'

export interface GreenWalkInterface extends GreenWalkLightInterface {
	description: string
	location: {
		longitude: number
		latitude: number
		postal: string
		city: string
	}
	state: boolean
	comments?: Comment[]
}

export const GreenWalkTestExemple: GreenWalkInterface = {
	...GreenWalkLightTestExample,
	description: 'description',
	location: {
		longitude: 0,
		latitude: 0,
		postal: 'postal',
		city: 'city'
	},
	state: true,
	comments: []
}
