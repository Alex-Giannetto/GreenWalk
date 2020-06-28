import { GreenWalkInterface } from '../interfaces/green-walk.interface'
import { LocationTestExample } from '../interfaces/location.interface'

export const GreenWalksFixtures: GreenWalkInterface[] = [
	{
		id: '1',
		name: 'Châtelet-les-Halles',
		datetime: '2020-07-01 15:08:00',
		location: {
			...LocationTestExample,
			coordinates: {
				latitude: 48.861591,
				longitude: 2.349923,
			},
		},
		author: {
			firstName: 'Judith',
		},
		participant: [
			{ firstName: 'Benoit' },
			{ firstName: 'Ilies' },
			{ firstName: 'Théo' },
			{ firstName: 'Elias' },
		],
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, adipisci assumenda atque aut ' +
			'corporis cum earum esse expedita mollitia necessitatibus, neque, saepe sed suscipit. Animi exercitationem ' +
			'expedita officiis. Qui, velit!',
		state: true,
		comments: [],
	}, {
		id: '2',
		name: 'Nation',
		datetime: '2020-04-12 15:08:00',
		location: {
			...LocationTestExample,
			coordinates: {
				latitude: 48.848384,
				longitude: 2.395905,
			},
		},
		author: {
			firstName: 'Alex',
		},
		participant: [
			{ firstName: 'Isabelle' },
			{ firstName: 'Juliette' },
			{ firstName: 'Paul' },
			{ firstName: 'Antoine' },
		],
		description: 'lorem...',
		state: true,
		comments: [],
	}, {
		id: '3',
		name: 'Buttes de Chaumont',
		datetime: '2020-04-12 15:08:00',
		location: {
			...LocationTestExample,
			coordinates: {
				latitude: 48.880627,
				longitude: 2.383256,
			},
		},
		author: {
			firstName: 'Alex',
		},
		participant: [
			{ firstName: 'Isabelle' },
			{ firstName: 'Juliette' },
			{ firstName: 'Paul' },
			{ firstName: 'Antoine' },
		],
		description: 'lorem...',
		state: true,
		comments: [],
	},
]
