import { TestBed } from '@angular/core/testing'

import { AuthService } from './auth.service'

describe('AuthService', () => {
	let service: AuthService

	beforeEach(() => {
		TestBed.configureTestingModule({})
		service = TestBed.get(AuthService)
	})

	it('should be created', () => {
		expect(service).toBeTruthy()
	})

	it('should return null', () => {
		expect(AuthService.getUser()).toBeFalsy()
	})

	it('should return null', () => {
		expect(AuthService.getToken()).toBeFalsy()
	})

})
