import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { IonicModule } from '@ionic/angular'

import { GreenWalksPage } from './green-walks.page'

describe('GreenWalksPage', () => {
	let component: GreenWalksPage
	let fixture: ComponentFixture<GreenWalksPage>

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [GreenWalksPage],
			imports: [IonicModule.forRoot()]
		}).compileComponents()

		fixture = TestBed.createComponent(GreenWalksPage)
		component = fixture.componentInstance
		fixture.detectChanges()
	}))

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})
