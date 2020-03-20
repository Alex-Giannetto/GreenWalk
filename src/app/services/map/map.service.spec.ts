import { TestBed } from '@angular/core/testing'

import { MapService } from './map.service'
import { environment } from '../../../environments/environment'

describe('MapService', () => {
	let service: MapService

	beforeEach(() => {
		TestBed.configureTestingModule({})
		service = TestBed.get(MapService)
	})

	it('should be created', () => {
		expect(service).toBeTruthy()
	})

	it('should return map url', () => {
		expect(service.getMap({ latitude: 0, longitude: 0 }, { width: 0, height: 0 })).toBe(
			// tslint:disable-next-line:max-line-length
			`https://api.mapbox.com/styles/v1/mapbox/${service.getStyle()}/static/pin-s-circle+669d34(0,0)/0,0,10,0/0x0@2x?access_token=${environment.mapBox.token}&attribution=false&logo=false`
		)
	})
})
