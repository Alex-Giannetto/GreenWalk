import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { ComponentFixture, TestBed } from '@angular/core/testing'

import { AvatarComponent } from './avatar.component'
import { PersonInterface, PersonTestExample } from '../../interfaces/person.interface'
import { ComponentsModule } from '../components.module'

describe('AvatarComponent', () => {
	let component: AvatarComponent
	let fixture: ComponentFixture<TestHostComponent>

	beforeEach(async () => {
		TestBed.configureTestingModule({
			declarations: [TestHostComponent],
			imports: [ComponentsModule],
			schemas: [CUSTOM_ELEMENTS_SCHEMA]
		})
			.compileComponents()

		fixture = TestBed.createComponent(TestHostComponent)
		component = fixture.debugElement.children[0].componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})

@Component({
	template: '<app-avatar [person]="person"></app-avatar>'
})
class TestHostComponent {
	private person: PersonInterface = PersonTestExample
}
