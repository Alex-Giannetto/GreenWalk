import { fakeAsync, TestBed } from '@angular/core/testing'

import { AuthService } from './auth.service'
import { AuthRequestService } from '../../requests/auth-request.service'
import { defer, Observable } from 'rxjs'

function fakeObservable<T> (data: T): Observable<T> {
	return defer(() => Promise.resolve(data))
}

const authRequestServiceMock = {
	signIn: (email: string, password: string) => fakeObservable({ token: 'token' }),
	getUser: (token: string) => fakeObservable({ id: 'id' }),
	register: (email: string, firstName: string, birthDate: string, password: string) => fakeObservable({ token: 'token' })
}

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

	it('should signIn', fakeAsync(() => {
		const email = 'admin@mail.com'
		const password = 'password'

		expect(service.signIn(email, password)).toBeTruthy()
	}))

	it('should return an user', fakeAsync(() => {
		const token = 'token'
		expect(service.setUser(token)).toBeTruthy()
	}))

	it('should register', fakeAsync(() => {
		expect(service.register('email', 'firstName', 'birthDate', 'password')).toBeTruthy()
	}))

})
