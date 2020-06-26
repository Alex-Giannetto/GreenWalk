import { Component, OnInit } from '@angular/core'
import { FormGroup } from '@angular/forms'
import { AddGreenWalkForm } from '../../../forms/GreenWalk/add.form'
import * as Moment from 'moment'
import { LoadingController, ModalController, NavController, ToastController } from '@ionic/angular'
import { LocationModalComponent } from '../../../components/location-modal/location-modal.component'
import { GeolocationService } from '../../../services/geolocation/geolocation.service'
import { CoordinatesInterface } from '../../../interfaces/coordinates.Interface'
import { GreenWalkRequest } from '../../../requests/green-walk.request'

@Component({
	selector: 'app-add-green-walk',
	templateUrl: './add-green-walk.page.html',
	styleUrls: ['./add-green-walk.page.scss'],
})
export class AddGreenWalkPage implements OnInit {

	formGroup: FormGroup = AddGreenWalkForm
	moment = Moment
	coordinates: CoordinatesInterface = JSON.parse(localStorage.getItem('location')).coordinates

	constructor (
		private modalController: ModalController,
		private geolocationService: GeolocationService,
		private toastController: ToastController,
		private loadingController: LoadingController,
		private greenWalkRequest: GreenWalkRequest,
		private navController: NavController,
	) {}

	ngOnInit (): void {
		this.formGroup.patchValue({ location: { ...this.coordinates } })
	}

	async openLocationModal () {
		const modal = await this.modalController.create({
			component: LocationModalComponent,
			componentProps: { coordinates: { ...this.formGroup.value.location } },
		})

		await modal.present()
		this.coordinates = (await modal.onWillDismiss()).data

		try {
			const location = await this.geolocationService.getAddressInfoFormCoordinate(this.coordinates)
			this.formGroup.patchValue({ location: { ...location, ...this.coordinates } })
		} catch (e) {
			(await this.toastController.create({
				message: 'Une erreur est survenue',
				duration: 1000,
				position: 'top',
				color: 'danger',
			})).present()
		}
	}

	async onSubmit () {
		const loading = await this.loadingController.create()

		try {
			await loading.present()

			const data = {
				...this.formGroup.value,
				...this.formGroup.value.location,
				datetime: Moment(this.formGroup.value.datetime, 'YYYY-MM-DDTHH:mmZ').format('YYYY-MM-DD HH:mm:ss'),
			}

			if (Moment(data.datetime) < Moment().add(10, 'm')) {
				data.datetime = Moment().add(10, 'm').format('YYYY-MM-DD HH:mm:ss')
			}

			const id = await this.greenWalkRequest.add(data).toPromise()
			this.formGroup.reset()
			await this.navController.navigateRoot('/green-walks/' + id)

		} catch (e) {
			console.error(e);
			(await this.toastController.create({
				message: 'Une erreur est survenue',
				duration: 1000,
				position: 'top',
				color: 'danger',
			})).present()

		} finally { await loading.dismiss() }
	}
}
