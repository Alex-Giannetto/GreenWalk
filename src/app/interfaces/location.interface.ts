import { CoordinatesInterface, CoordinatesTestExemple } from './coordinates.Interface'

export interface LocationInterface {
	coordinates: CoordinatesInterface
	city?: string
	street?: string
	zipCode?: string
}

export const LocationTestExample: LocationInterface = {
	coordinates: CoordinatesTestExemple,
	city: 'Paris',
	street: '7 rue de turbigo',
	zipCode: '75001'
}
