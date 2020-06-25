import { FormControl, FormGroup, Validators } from '@angular/forms'

export const AddGreenWalkForm: FormGroup = new FormGroup({
	name: new FormControl(null, [
		Validators.required,
		Validators.maxLength(255),
	]),
	datetime: new FormControl(null, [
		Validators.required,
	]),
	description: new FormControl(null, [
		Validators.required,
	]),
	location: new FormGroup({
		longitude: new FormControl(null, [
			Validators.required,
		]),
		latitude: new FormControl(null, [
			Validators.required,
		]),
		city: new FormControl(null, [
			Validators.required,
		]),
		zipCode: new FormControl(null, [
			Validators.required,
		]),
		street: new FormControl(null, [
			Validators.required,
		]),
		full: new FormControl(null, [
			Validators.required,
		]),
	}),
})
