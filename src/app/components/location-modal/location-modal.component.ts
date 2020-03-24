import { Component, OnInit } from '@angular/core'
import { environment } from '../../../environments/environment'
import { Map, NavigationControl } from 'mapbox-gl'
import { GeolocationService } from '../../services/geolocation/geolocation.service'
import { ModalController } from '@ionic/angular'
import { CoordinatesTestExemple } from '../../interfaces/coordinates.Interface'
import { LocationInterface } from '../../interfaces/location.interface'

@Component({
	selector: 'app-location-modal',
	templateUrl: './location-modal.component.html',
	styleUrls: ['./location-modal.component.scss'],
})
export class LocationModalComponent implements OnInit {
	map: Map

	constructor (private geolocationService: GeolocationService, private modalController: ModalController) {}

	async ngOnInit () {
		let location = JSON.parse(localStorage.getItem('location')) as LocationInterface

		if (!location) {
			location = { coordinates: CoordinatesTestExemple }
		}

		const style = true ? 'mapbox://styles/mapbox/streets-v11' : 'mapbox://styles/mapbox/dark-v10'

		this.map = new Map({
			accessToken: environment.mapBox.token,
			container: 'map',
			center: { lat: location.coordinates.latitude, lng: location.coordinates.longitude },
			zoom: 13,
			style,
		})

		this.map.addControl(new NavigationControl())

		setTimeout(() => this.map.resize(), 1)
	}

	async setLocationBtnClicked () {
		const { lat: latitude, lng: longitude } = this.map.getCenter()
		const coordinates = { latitude, longitude }
		await this.geolocationService.setLocation(coordinates)
		await this.modalController.dismiss()
	}

}
