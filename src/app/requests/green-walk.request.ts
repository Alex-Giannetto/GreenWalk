import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { GreenWalkLightInterface } from '../interfaces/green-walk-light.interface'
import { CoordinatesInterface } from '../interfaces/coordinates.Interface'
import { GreenWalksFixtures } from '../fixtures/GreenWalksLight.fixture'
import { GreenWalkInterface } from '../interfaces/green-walk.interface'
import { Request } from './request'

@Injectable({
	providedIn: 'root',
})
export class GreenWalkRequest {

	constructor (private requestService: Request) { }

	getAll (location: CoordinatesInterface, radius: number, page: number): Observable<GreenWalkLightInterface[]> {
		return new Observable<GreenWalkLightInterface[]>(observer => {
			setTimeout(() => observer.next([...GreenWalksFixtures, ...GreenWalksFixtures]), 1000)
		})
	}

	getOneById (id: string): Observable<GreenWalkInterface> {
		return new Observable<GreenWalkInterface>(observer => {
			setTimeout(() => {
				const greenWalk = GreenWalksFixtures.filter(element => element.id === id)[0]
				if (greenWalk) {observer.next(greenWalk)} else {observer.error('no data')}
			}, 1000)
		})
	}

	add (greenwalk: GreenWalkInterface): Observable<any> {
		return this.requestService.post('greenwalk', {...greenwalk})
	}

}
