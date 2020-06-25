import { Component, OnInit } from '@angular/core'
import { environment } from '../../../environments/environment'
import { Map, NavigationControl } from 'mapbox-gl'
import { ModalController } from '@ionic/angular'
import { CoordinatesInterface } from '../../interfaces/coordinates.Interface'

@Component({
	selector: 'app-location-modal',
	templateUrl: './location-modal.component.html',
	styleUrls: ['./location-modal.component.scss'],
})
export class LocationModalComponent implements OnInit {
	map: Map
	coordinates: CoordinatesInterface

	constructor (private modalController: ModalController) {}

	async ngOnInit () {
		// const style = true ? 'mapbox://styles/mapbox/streets-v11' : 'mapbox://styles/mapbox/dark-v10'
		const style = 'mapbox://styles/mapbox/streets-v11'

		this.map = new Map({
			accessToken: environment.mapBox.token,
			container: 'map',
			center: { lat: this.coordinates.latitude, lng: this.coordinates.longitude },
			zoom: 13,
			style,
		})

		this.map.addControl(new NavigationControl())

		setTimeout(() => this.map.resize(), 1)
	}

	async setLocationBtnClicked () {
		const { lat: latitude, lng: longitude } = this.map.getCenter()
		const coordinates = { latitude, longitude }

		await this.modalController.dismiss(coordinates)
	}

}
