import { FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms'
import * as Moment from 'moment'

export const AgeValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
	if (Moment(control.value, 'DD/MM/YYYY', true).isValid() || Moment(control.value, 'YYYY-MM-DD', true).isValid()) {
		const age = Moment().diff(Moment(control.value), 'year')

		return age < 18 ? { tooYoung: true } : null
	}

	return { badFormat: true }
}
