import { Component, OnInit } from '@angular/core'
import { GreenWalkLightInterface } from '../../interfaces/green-walk-light.interface'
import { GreenWalkRequestService } from '../../requests/green-walk-request.service'

@Component({
	selector: 'app-green-walks',
	templateUrl: './green-walks.page.html',
	styleUrls: ['./green-walks.page.scss'],
})
export class GreenWalksPage implements OnInit {

	state = {
		loading: false
	}

	greenWalks: GreenWalkLightInterface[] = []

	constructor (private greenWalkRequestService: GreenWalkRequestService) {}

	async ngOnInit () {
		this.init()
	}

	async loadNextGreenWalks (event) {
		this.greenWalks.push(...await this.getGreenWalks())
		event.target.complete()
	}

	async init (event = null) {
		this.state.loading = true
		this.greenWalks = await this.getGreenWalks()
		this.state.loading = false

		if (event) {
			event.target.complete()
		}
	}

	private getGreenWalks (): Promise<GreenWalkLightInterface[]> {
		return new Promise<GreenWalkLightInterface[]>((resolve, reject) => {
			this.greenWalkRequestService.getGreenWalks({ longitude: 0, latitude: 0 }, 0, 0)
				.subscribe(greenWalks => {
					resolve(greenWalks)
				}, error => reject(error))
		})
	}
}
