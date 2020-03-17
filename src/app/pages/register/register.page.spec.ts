import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { IonicModule, LoadingController, NavController, ToastController } from '@ionic/angular'

import { RegisterPage } from './register.page'
import { FormGroup, ReactiveFormsModule } from '@angular/forms'
import { By } from '@angular/platform-browser'
import { AuthService } from '../../services/auth/auth.service'

const Mock = {
	authService: {},
	navController: {}
}

describe('RegistrationPage', () => {
	let component: RegisterPage
	let fixture: ComponentFixture<RegisterPage>

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [RegisterPage],
			imports: [IonicModule.forRoot(), ReactiveFormsModule],
			providers: [
				{ provide: AuthService, useValue: Mock.authService },
				{ provide: NavController, useValue: Mock.navController },
				ToastController,
				LoadingController,
			]
		}).compileComponents()

		fixture = TestBed.createComponent(RegisterPage)
		component = fixture.componentInstance
		component.formGroup.reset()
		fixture.detectChanges()
	}))

	it('should create', () => {
		expect(component).toBeTruthy()
	})

	it('invalid step1 should not pass', () => {
		fixture.detectChanges()
		const nextBtn = fixture.debugElement.nativeElement.querySelector('ion-button[id=next]')
		expect(nextBtn.disabled).toBeTruthy()
	})

	it('should not increment step', () => {
		const step = component.step
		component.nextStep()
		expect(step === component.step).toBeTruthy()
	})

	it('valid step1 should pass to step2', () => {
		const step1 = component.formGroup.controls.step1 as FormGroup
		step1.setValue({
			email: 'test@test.com',
			firstName: 'test',
			birthDate: '01/01/1970'
		})

		fixture.detectChanges()

		const nextBtn = fixture.debugElement.query(By.css('#next')).nativeElement

		expect(step1.valid).toBeTruthy()
		expect(nextBtn.disabled).toBeFalsy()
	})

	it('valid step2 should pass to step3', () => {
		component.step = 2
		const step2 = component.formGroup.controls.step2 as FormGroup

		step2.setValue({
			password: 'password',
			repeatPassword: 'password'
		})

		fixture.detectChanges()

		const nextBtn = fixture.debugElement.query(By.css('#next')).nativeElement

		expect(step2.valid).toBeTruthy()
		expect(nextBtn.disabled).toBeFalsy()
	})

	it('should not send form if invalid', async () => {
		component.formGroup.reset()
		expect(await component.submit()).toBeFalsy()
	})

})
