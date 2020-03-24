import { Component, OnInit } from '@angular/core'
import { environment } from '../../../environments/environment'
import { Map, NavigationControl } from 'mapbox-gl'

@Component({
	selector: 'app-location-modal',
	templateUrl: './location-modal.component.html',
	styleUrls: ['./location-modal.component.scss'],
})
export class LocationModalComponent implements OnInit {
	map: Map

	async ngOnInit () {
		// const location = JSON.parse(localStorage.getItem('location'))
		//
		// if (!location.coordinates) {
		// 	location.coordinates.longitude = 2
		// 	location.coordinates.latitude = 48
		// }

		const location = {
			coordinates: {
				latitude: 48,
				longitude: 2
			}
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

}
