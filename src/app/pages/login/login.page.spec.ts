import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { IonicModule } from '@ionic/angular'

import { LoginPage } from './login.page'
import { DebugElement } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { By } from '@angular/platform-browser'

describe('LoginPage', () => {
	let component: LoginPage
	let fixture: ComponentFixture<LoginPage>

	let elements: {
		mail: DebugElement,
		password: DebugElement,
		submit: DebugElement
	}

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [LoginPage],
			imports: [
				IonicModule.forRoot(),
				ReactiveFormsModule,
				FormsModule
			]
		}).compileComponents()

		fixture = TestBed.createComponent(LoginPage)
		component = fixture.componentInstance
		component.ngOnInit()
		fixture.detectChanges()

		elements = {
			mail: fixture.debugElement.query(By.css('input[type=email]')),
			password: fixture.debugElement.query(By.css('input[type=password]')),
			submit: fixture.debugElement.query(By.css('ion-button[type=submit]'))
		}
	}))

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})
