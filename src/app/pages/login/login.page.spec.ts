import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { IonicModule } from '@ionic/angular'

import { LoginPage } from './login.page'
import { DebugElement } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { By } from '@angular/platform-browser'
import { AuthService } from '../../services/auth/auth.service'

const authServiceMock = {}

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
			],
			providers: [
				{ provide: AuthService, useValue: authServiceMock }
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

	it('should have two inputs', () => {
		expect(elements.mail).toBeTruthy()
		expect(elements.password).toBeTruthy()
	})

	it('submit button should be disable when form is empty', () => {
		expect(elements.submit.nativeElement.disabled).toBeTruthy()
	})

	it('form should be invalid when bad email is passed', () => {
		component.formGroup.controls.password.setValue('password')
		expect(component.formGroup.valid).toBeFalsy()
	})

	it('form should be invalid when no password is passed', () => {
		component.formGroup.controls.email.setValue('user@mail.com')
		expect(component.formGroup.valid).toBeFalsy()
	})

	it('form should be valid', () => {
		expect(component.formGroup.valid).toBeFalsy()
		component.formGroup.controls.email.setValue('user@mail.com')
		component.formGroup.controls.password.setValue('password')
		expect(component.formGroup.valid).toBeTruthy()
	})
})
