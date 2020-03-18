import { Component, Input } from '@angular/core'
import { GreenWalksLight } from '../../interfaces/green-walk-light'

@Component({
	selector: 'app-green-walk-card',
	templateUrl: './green-walk-card.component.html',
	styleUrls: ['./green-walk-card.component.scss'],
})
export class GreenWalkCardComponent {
	@Input() greenWalk: GreenWalksLight
}
