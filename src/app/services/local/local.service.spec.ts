import { TestBed } from '@angular/core/testing'

import { LocalService } from './local.service'

describe('LocalService', () => {
	beforeEach(() => TestBed.configureTestingModule({}))

	it('should be created', () => {
		const service: LocalService = TestBed.get(LocalService)
		expect(service).toBeTruthy()
	})

	it('should not have user', () => {
		localStorage.clear()
		expect(LocalService.getUser()).toBeFalsy()
	})

	it('should not have token', () => {
		localStorage.clear()
		expect(LocalService.getToken()).toBeFalsy()
	})
})
