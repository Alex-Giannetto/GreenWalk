import { Component } from '@angular/core'
import { FormGroup } from '@angular/forms'
import { RegisterForm } from '../../forms/register.form'
import { AuthService } from '../../services/auth/auth.service'
import { LoadingController, NavController, ToastController } from '@ionic/angular'
import * as Moment from 'moment'
import { DATE_FORMAT_FR, DATE_FORMAT_US } from '../../validators/age.validator'
import { Request } from '../../requests/request'

@Component({
	selector: 'app-registration',
	templateUrl: './register.page.html',
	styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
	formGroup: FormGroup = RegisterForm
	step: number = 1

	constructor (
		private authService: AuthService,
		private navController: NavController,
		private toastController: ToastController,
		private loadingController: LoadingController
	) {}

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

	previousStep (): void {
		if (this.step > 1) {
			this.step--
		}
	}

	async submit (): Promise<null> {
		if (this.formGroup.invalid) {
			return
		}

		try {
			(await this.loadingController.create({ message: 'Chargement…' })).present()

			const { firstName, email, birthDate: date } = this.formGroup.value.step1
			const { password } = this.formGroup.value.step2

			const birthDate = (Moment(date, DATE_FORMAT_FR, true).isValid()) ?
				Moment(date, DATE_FORMAT_FR).format(DATE_FORMAT_US) : date

			await this.authService.register(email, firstName, birthDate, password)
			await this.navController.navigateRoot('/home')

		} catch (e) {
			Request.HandleError(e, this.toastController, this.navController)
		} finally {
			await this.loadingController.dismiss()
		}

	}

	backTologin(){
		this.navController.back()
	}

	private getGroup (step: number): FormGroup {
		return this.formGroup.controls['step' + step] as FormGroup
	}
}
