import { GreenWalkLight, GreenWalkLightTestExample } from './green-walk-light'

export interface GreenWalk extends GreenWalkLight {
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

export const GreenWalkTestExemple: GreenWalk = {
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
