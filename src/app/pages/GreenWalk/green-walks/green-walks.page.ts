import { Component, OnInit } from '@angular/core'
import { GreenWalkLightInterface } from '../../../interfaces/green-walk-light.interface'
import { GreenWalkRequest } from '../../../requests/green-walk.request'
import { GeolocationService } from '../../../services/geolocation/geolocation.service'
import { ModalController } from '@ionic/angular'
import { LocalService } from '../../../services/local/local.service'
import { LocationModalComponent } from '../../../components/location-modal/location-modal.component'

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

	constructor (
		private greenWalkRequestService: GreenWalkRequest,
		private geolocationService: GeolocationService,
		private modalController: ModalController,
	) {}

	async ngOnInit () {
		this.state.loading = true
		try {
			await this.geolocationService.getLastLocation()
			this.init()

		} catch (e) {
			console.error(e)
			this.chooseLocation()
		}
	}

	async chooseLocation () {
		const modal = await this.modalController.create({
			component: LocationModalComponent,
			backdropDismiss: false
		})
		await modal.present()
		await modal.onWillDismiss()

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

			this.greenWalkRequestService.getGreenWalks(LocalService.location.coordinates, 0, 0)
				.subscribe(greenWalks => resolve(greenWalks), error => reject(error))

		})
	}
}
