import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import {IonicModule, ModalController} from '@ionic/angular'

import { GreenWalksPage } from './green-walks.page'
import { ComponentsModule } from '../../components/components.module'
import {NO_ERRORS_SCHEMA} from '@angular/core'
import {GeolocationService} from '../../services/geolocation/geolocation.service'

const Mock = {
	geolocationService: {}
}

describe('GreenWalksPage', () => {
	let component: GreenWalksPage
	let fixture: ComponentFixture<GreenWalksPage>

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [GreenWalksPage],
			imports: [
				IonicModule.forRoot(),
				ComponentsModule
			],
			providers: [
				{provide: GeolocationService, useValue: Mock.geolocationService}
			],
			schemas: [ NO_ERRORS_SCHEMA ]
		}).compileComponents()

		fixture = TestBed.createComponent(GreenWalksPage)
		component = fixture.componentInstance
		fixture.detectChanges()
	}))

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})
