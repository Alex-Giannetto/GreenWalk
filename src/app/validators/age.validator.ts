import { FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms'
import * as Moment from 'moment'

export const DATE_FORMAT_US = 'YYYY-MM-DD'
export const DATE_FORMAT_FR = 'DD/MM/YYYY'

export const AgeValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {

	for (const format of [DATE_FORMAT_US, DATE_FORMAT_FR]) {
		if (Moment(control.value, format, true).isValid()) {
			const age = Moment().diff(Moment(control.value, format), 'year')
			return age >= 18 ? null : { tooYoung: true }
		}
	}

	return { badFormat: true }
}
