import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { GreenWalkLightInterface } from '../interfaces/green-walk-light.interface'
import { LocationInterface } from '../interfaces/location.Interface'
import { GreenWalksFixtures } from '../fixtures/GreenWalksLight.fixture'

@Injectable({
	providedIn: 'root'
})
export class GreenWalkRequest {

	constructor () { }

	getGreenWalks (location: LocationInterface, radius: number, page: number): Observable<GreenWalkLightInterface[]> {
		return new Observable<GreenWalkLightInterface[]>(observer => {
			setTimeout(() => observer.next([...GreenWalksFixtures, ...GreenWalksFixtures]), 1000)
		})
	}
}
