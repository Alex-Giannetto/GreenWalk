import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { IonicModule } from '@ionic/angular'

import { GreenWalkCardComponent } from './green-walk-card.component'
import { Component } from '@angular/core'
import { GreenWalkLightInterface, GreenWalkLightTestExample } from '../../interfaces/green-walk-light.interface'
import { ComponentsModule } from '../components.module'

describe('GreenWalkCardComponent', () => {
	let component: GreenWalkCardComponent
	let fixture: ComponentFixture<TestHostComponent>

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [TestHostComponent],
			imports: [IonicModule.forRoot(), ComponentsModule]
		}).compileComponents()

		fixture = TestBed.createComponent(TestHostComponent)
		component = fixture.debugElement.children[0].componentInstance
		fixture.detectChanges()
	}))

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})

@Component({
	template: '<app-green-walk-card [greenWalk]="greenWalk"></app-green-walk-card>'
})
class TestHostComponent {
	private greenWalk: GreenWalkLightInterface = GreenWalkLightTestExample
}
