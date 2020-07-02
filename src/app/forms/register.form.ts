import { FormControl, FormGroup, Validators } from '@angular/forms'
import { AgeValidator } from '../validators/age.validator'
import { PasswordsValidators } from '../validators/passwords.validator'

export const RegisterForm: FormGroup = new FormGroup({
	step1: new FormGroup({
		firstName: new FormControl(null, [
			Validators.required,
		]),
		email: new FormControl(null, [
			Validators.required,
			Validators.email
		]),
		birthDate: new FormControl(null, [
			Validators.required,
			AgeValidator
		]),
	}),

	step2: new FormGroup({
		password: new FormControl(null, [
			Validators.required,
			Validators.minLength(8)
		]),
		repeatPassword: new FormControl(null, [
			Validators.required,
			Validators.minLength(8)
		]),
	}, { validators: PasswordsValidators }),
})
