import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { IonicModule } from '@ionic/angular'

import { GreenWalksPage } from './green-walks.page'
import { ComponentsModule } from '../../components/components.module'

describe('GreenWalksPage', () => {
	let component: GreenWalksPage
	let fixture: ComponentFixture<GreenWalksPage>

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [GreenWalksPage],
			imports: [IonicModule.forRoot(), ComponentsModule],
		}).compileComponents()

		fixture = TestBed.createComponent(GreenWalksPage)
		component = fixture.componentInstance
		fixture.detectChanges()
	}))

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})
