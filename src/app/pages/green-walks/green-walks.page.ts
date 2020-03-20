import { Component, OnInit } from '@angular/core'
import { GreenWalkLightInterface } from '../../interfaces/green-walk-light.interface'
import { GreenWalkRequestService } from '../../requests/green-walk-request.service'

@Component({
	selector: 'app-green-walks',
	templateUrl: './green-walks.page.html',
	styleUrls: ['./green-walks.page.scss'],
})
export class GreenWalksPage implements OnInit {

	greenWalks: GreenWalkLightInterface[] = []

	constructor (private greenWalkRequestService: GreenWalkRequestService) {}

	ngOnInit (): void {
		this.greenWalkRequestService.getGreenWalks({ longitude: 0, latitude: 0 }, 0, 0)
	}
}
