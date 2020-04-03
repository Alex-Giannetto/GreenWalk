import { Injectable } from '@angular/core'
import { CoordinatesInterface } from '../interfaces/coordinates.Interface'
import { Observable } from 'rxjs'
import { Request } from './request'
import { environment } from '../../environments/environment'

@Injectable({
	providedIn: 'root'
})
export class LocationRequest {

	constructor (private requestService: Request) {}

	getAddressFromCoordinate (coordinates: CoordinatesInterface): Observable<any> {
		return this.requestService.get(
			'https://api.mapbox.com/geocoding/v5/mapbox.places/' +
			coordinates.longitude + ',' + coordinates.latitude + '.json?types=address&' +
			'access_token=' + environment.mapBox.token,
			null,
			false
		)
	}

}
