import { Injectable } from '@angular/core'
import { Geolocation } from '@ionic-native/geolocation/ngx'
import { CoordinatesInterface } from '../../interfaces/coordinates.Interface'
import { LocationRequest } from '../../requests/location.request'
import { LocationInterface } from '../../interfaces/location.interface'
import { LocalService } from '../local/local.service'

@Injectable({
	providedIn: 'root'
})
export class GeolocationService {

	constructor (private geolocation: Geolocation, private locationRequest: LocationRequest) { }

	getLastLocation (): Promise<LocationInterface> {
		if (LocalService.location) { return Promise.resolve(LocalService.location) }

		const config = { timeout: 5_000, maximumAge: 300_000 }

		return this.geolocation.getCurrentPosition(config)
			.then(geoPosition => Promise.resolve({ coordinates: geoPosition.coords }))
			.catch(e => Promise.reject(e))
	}

	async getAddressInfoFormCoordinate (coordinates: CoordinatesInterface): Promise<string> {
		return new Promise<string>(async (resolve, reject) => {
			this.locationRequest.getAddressFromCoordinate(coordinates).subscribe(async data => {
				if (typeof data.features[0] === 'undefined') {
					reject('no data')
				}
				resolve(data.features[0].place_name)
			}, error => reject(error))
		})
	}

	async setLocation (coordinates: CoordinatesInterface) {
		return new Promise<any>(async resolve => {
			let street: string
			try {
				street = await this.getAddressInfoFormCoordinate(coordinates)
			} catch (e) {
				street = 'lat:' + (Math.round(coordinates.latitude * 1000) / 1000) + ', long:' + (Math.round(coordinates.longitude * 1000) / 1000)
			}

			const location = {
				coordinates,
				street
			}

			localStorage.setItem('location', JSON.stringify(location))
			resolve(location)
		})

	}

}
