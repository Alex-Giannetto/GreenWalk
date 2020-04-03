import {fakeAsync, TestBed} from '@angular/core/testing'
import {Geolocation} from '@ionic-native/geolocation/ngx'

import {GeolocationService} from './geolocation.service'
import {NO_ERRORS_SCHEMA} from '@angular/core'
import {LocationRequest} from '../../requests/location.request'

describe('GeolocationService', () => {
	let service: GeolocationService


	describe('Location is disable', () => {
		const Mock = {
			geolocation: {
				getCurrentPosition: (config) => Promise.reject(new Error('No Data'))
			},
			locationRequest: {}
		}

		beforeEach(() => {
			TestBed.configureTestingModule({
				providers: [
					{provide: Geolocation, useValue: Mock.geolocation},
					{provide: LocationRequest, useValue: Mock.locationRequest}
				],
				schemas: [NO_ERRORS_SCHEMA]
			})

			service = TestBed.get(GeolocationService)

		})

		it('should be created', () => {
			expect(service).toBeTruthy()
		})

		it('should not be able to return position', async () => {
			try {
				await service.getLastLocation()
			} catch (error) {
				expect(error).toEqual(new Error('No Data'))
			}
		})


	})

	describe('Location is enabled', () => {

		const Mock = {
			geolocation: {
				getCurrentPosition: (config) => Promise.resolve({coords: {latitude: 0, longitude: 0}})
			},
			locationRequest: {}
		}

		beforeEach(() => {
			TestBed.configureTestingModule({
				providers: [
					{provide: Geolocation, useValue: Mock.geolocation},
					{provide: LocationRequest, useValue: Mock.locationRequest}
				],
				schemas: [NO_ERRORS_SCHEMA]
			})

			service = TestBed.get(GeolocationService)

		})

		it('should return position', async () => {
			expect(await service.getLastLocation()).toEqual({coordinates: {latitude: 0, longitude: 0}})
		})
	})

})
