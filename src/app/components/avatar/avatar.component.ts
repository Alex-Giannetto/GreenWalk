import { Component, Input } from '@angular/core'
import { PersonInterface } from '../../interfaces/person.interface'

@Component({
	selector: 'app-avatar',
	templateUrl: './avatar.component.html',
	styleUrls: ['./avatar.component.scss'],
})
export class AvatarComponent {

	@Input() person: PersonInterface
	@Input() size: 'little' | 'big' | 'side-menu'
	@Input() round: boolean
	@Input() shadow: boolean
}
