import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { IonicModule, ModalController } from '@ionic/angular'

import { LocationModalComponent } from './location-modal.component'
import { GeolocationService } from '../../services/geolocation/geolocation.service'

const Mock = {
	geolocationService: () => {}
}

describe('LocationModalComponent', () => {
	let component: LocationModalComponent
	let fixture: ComponentFixture<LocationModalComponent>

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [LocationModalComponent],
			providers: [
				{ provide: GeolocationService, useValue: Mock.geolocationService() },
				ModalController
			],
			imports: [IonicModule]
		}).compileComponents()

		fixture = TestBed.createComponent(LocationModalComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	}))

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})
