import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { IonicModule } from '@ionic/angular'

import { ParticipantsComponent } from './participants.component'
import { Component } from '@angular/core'
import { GreenWalkLight, GreenWalkLightTestExample } from '../../interfaces/green-walk-light'
import { AvatarComponent } from '../avatar/avatar.component'

describe('ParticipantsComponent', () => {
	let component: ParticipantsComponent
	let fixture: ComponentFixture<TestHostComponent>

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [TestHostComponent, ParticipantsComponent, AvatarComponent],
			imports: [IonicModule.forRoot()]
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
	template: '<app-participants [greenWalk]="greenWalk"></app-participants>'
})
class TestHostComponent {
	private greenWalk: GreenWalkLight = GreenWalkLightTestExample
}
