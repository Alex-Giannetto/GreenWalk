import { Component, Input } from '@angular/core'
import { Person } from '../../interfaces/person'

@Component({
	selector: 'app-avatar',
	templateUrl: './avatar.component.html',
	styleUrls: ['./avatar.component.scss'],
})
export class AvatarComponent {

	@Input() person: Person
	@Input() size: 'little' | 'big' | 'side-menu'
	@Input() round: boolean
	@Input() shadow: boolean
}
