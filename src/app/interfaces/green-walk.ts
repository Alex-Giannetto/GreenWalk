import { GreenWalkLight } from './green-walk-light'

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
