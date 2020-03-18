import { GreenWalksLight } from './green-walks-light'

export interface GreenWalk extends GreenWalksLight {
	description: string
	location: {
		longitude: number
		latitude: number
		postal: string
		city: string
		image: string
	}
	state: boolean
	comments?: Comment[]
}
