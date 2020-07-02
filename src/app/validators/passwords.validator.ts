import { FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms'

// Check if the two input fields for the passwords are the same
export const PasswordsValidators: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
	const password = control.get('password').value
	const repeatPassword = control.get('repeatPassword').value

	if (!password || !repeatPassword) {
		return null
	}

	return password !== repeatPassword ? { notSame: true } : null
}
