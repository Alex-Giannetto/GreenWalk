import { Injectable } from '@angular/core'
import { Geolocation } from '@ionic-native/geolocation/ngx'
import { CoordinatesInterface } from '../../interfaces/coordinates.Interface'
import { LocationRequest } from '../../requests/location.request'
import { LocationInterface } from '../../interfaces/location.interface'
import { LocalService } from '../local/local.service'

@Injectable({
	providedIn: 'root',
})
export class GeolocationService {

	constructor (private geolocation: Geolocation, private locationRequest: LocationRequest) { }

	getLastLocation (): Promise<LocationInterface> {
		if (LocalService.location) { return Promise.resolve(LocalService.location) }

		const config = { timeout: 5_000, maximumAge: 300_000 }

		return this.geolocation.getCurrentPosition(config).
			then(geoPosition => Promise.resolve({ coordinates: geoPosition.coords })).
			catch(e => Promise.reject(e))
	}

	async getAddressInfoFormCoordinate (coordinates: CoordinatesInterface):
		Promise<{ full: string, street: string, city: string, zipCode: string, country: string }> {
		const data = await this.locationRequest.getAddressFromCoordinate(coordinates).toPromise()

		if (typeof data.features[0] === 'undefined') {
			return Promise.reject('no data')
		}

		const regex = /([0-9A-Za-zÀ-ÖØ-öø-ÿ -']+), ([0-9]+) ([0-9A-Za-zÀ-ÖØ-öø-ÿ -']+), ([0-9A-Za-zÀ-ÖØ-öø-ÿ -']+)/g
		const part = regex.exec(data.features[0].place_name)

		return Promise.resolve<{ full: string, street: string, city: string, zipCode: string, country: string }>({
			full: part[0],
			street: part[1],
			zipCode: part[2],
			city: part[3],
			country: part[4],
		})
	}

	async setLocation (coordinates: CoordinatesInterface) {
		return new Promise<any>(async resolve => {
			let street: string
			try {
				street = (await this.getAddressInfoFormCoordinate(coordinates)).street
			} catch (e) {
				street = 'lat:' + (Math.round(coordinates.latitude * 1000) / 1000) + ', long:' +
					(Math.round(coordinates.longitude * 1000) / 1000)
			}

			const location = {
				coordinates,
				street,
			}

			localStorage.setItem('location', JSON.stringify(location))
			resolve(location)
		})

	}

}
