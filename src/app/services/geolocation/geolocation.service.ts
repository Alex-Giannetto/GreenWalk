import { Injectable } from '@angular/core'
import { Geolocation } from '@ionic-native/geolocation/ngx'
import { LocationInterface } from '../../interfaces/location.Interface'

@Injectable({
	providedIn: 'root'
})
export class GeolocationService {

	constructor (private geolocation: Geolocation) { }

	getLastLocation () {
		const config = { timeout: 5 * 1000, maximumAge: 5 * 60 * 1000 }

		return new Promise<LocationInterface>((resolve, reject) => {
			this.geolocation.getCurrentPosition(config).then(geoPosition => {
				const { latitude, longitude } = geoPosition.coords
				resolve({ latitude, longitude })
			}).catch(e => reject(e))
		})
	}

}
