import { GreenWalkLightInterface } from '../interfaces/green-walk-light.interface'

export const GreenWalksFixtures: GreenWalkLightInterface[] = [
	{
		id: '1',
		name: 'Châtelet-les-Halles',
		datetime: '2020-04-01 15:08:00',
		location: {
			latitude: 48.861591,
			longitude: 2.349923,
		},
		author: {
			firstName: 'Judith'
		},
		participant: [
			{ firstName: 'Benoit' },
			{ firstName: 'Ilies' },
			{ firstName: 'Théo' },
			{ firstName: 'Elias' },
		]
	}, {
		id: '1',
		name: 'Nation',
		datetime: '2020-04-12 15:08:00',
		location: {
			latitude: 48.848384,
			longitude: 2.395905,
		},
		author: {
			firstName: 'Alex'
		},
		participant: [
			{ firstName: 'Isabelle' },
			{ firstName: 'Juliette' },
			{ firstName: 'Paul' },
			{ firstName: 'Antoine' },
		]
	}, {
		id: '1',
		name: 'Buttes de Chaumont',
		datetime: '2020-04-12 15:08:00',
		location: {
			latitude: 48.880627,
			longitude: 2.383256,
		},
		author: {
			firstName: 'Alex'
		},
		participant: [
			{ firstName: 'Isabelle' },
			{ firstName: 'Juliette' },
			{ firstName: 'Paul' },
			{ firstName: 'Antoine' },
		]
	}
]
