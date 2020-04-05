import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { IonicModule } from '@ionic/angular'

import { GreenWalkPage } from './green-walk.page'

describe('GreenWalkPage', () => {
	let component: GreenWalkPage
	let fixture: ComponentFixture<GreenWalkPage>

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [GreenWalkPage],
			imports: [IonicModule.forRoot()],
		}).compileComponents()

		fixture = TestBed.createComponent(GreenWalkPage)
		component = fixture.componentInstance
		fixture.detectChanges()
	}))

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})
