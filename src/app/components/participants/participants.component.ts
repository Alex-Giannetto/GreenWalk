import { Component, Input } from '@angular/core'
import { GreenWalksLight } from '../../interfaces/green-walks-light'

@Component({
	selector: 'app-participants',
	templateUrl: './participants.component.html',
	styleUrls: ['./participants.component.scss'],
})
export class ParticipantsComponent {
	@Input() greenWalk: GreenWalksLight
}
