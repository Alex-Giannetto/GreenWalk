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
	step: number = 0

	constructor () { }

}
