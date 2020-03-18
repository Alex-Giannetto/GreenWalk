import { Component } from '@angular/core'
import { GreenWalkLight } from '../../interfaces/green-walk-light'

@Component({
	selector: 'app-green-walks',
	templateUrl: './green-walks.page.html',
	styleUrls: ['./green-walks.page.scss'],
})
export class GreenWalksPage {

	greenWalks: GreenWalkLight[] = [{
		id: '1',
		name: 'Châtelet-les-Halles',
		datetime: '2020-01-24 15:08:00',
		location: {
			longitude: 48.861591,
			latitude: 2.349923,
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
	}]

}
