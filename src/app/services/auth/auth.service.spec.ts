import { TestBed } from '@angular/core/testing'

import { AuthService } from './auth.service'
import { AuthRequestService } from '../../requests/auth/auth-request.service'

const authRequestServiceMock = {}

describe('AuthService', () => {
	let service: AuthService

	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				{ provide: AuthRequestService, useValue: authRequestServiceMock }
			]
		})
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
