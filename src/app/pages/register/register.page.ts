import { Component } from '@angular/core'
import { FormGroup } from '@angular/forms'
import { RegisterForm } from '../../forms/register.form'

@Component({
	selector: 'app-registration',
	templateUrl: './register.page.html',
	styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
	formGroup: FormGroup = RegisterForm
	step: number = 3

	isGroupIsValid (): boolean {
		return this.getGroup(this.step).valid
	}

	nextStep (): void {
		if (this.getGroup(this.step).invalid) {
			return
		}

		if (this.step === 3) {
			return
		}

		this.step++
	}

	previousStep () {
		if (this.step > 1) {
			this.step--
		}
	}

	private getGroup (step: number): FormGroup {
		return this.formGroup.controls['step' + step] as FormGroup
	}
}
