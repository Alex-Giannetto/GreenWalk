import { Component, Input } from '@angular/core'
import { GreenWalkLightInterface } from '../../interfaces/green-walk-light.interface'

@Component({
	selector: 'app-participants',
	templateUrl: './participants.component.html',
	styleUrls: ['./participants.component.scss'],
})
export class ParticipantsComponent {
	@Input() greenWalk: GreenWalkLightInterface
}
