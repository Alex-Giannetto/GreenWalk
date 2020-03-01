import { Component, OnInit } from '@angular/core'
import { MenuController } from '@ionic/angular'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
	selector: 'app-login',
	templateUrl: './login.page.html',
	styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

	formGroup: FormGroup

	constructor (private menuController: MenuController, private formBuilder: FormBuilder) { }

	ionViewWillEnter (): void {
		this.menuController.enable(false).then()
	}

	ngOnInit (): void {
		this.formGroup = this.formBuilder.group({
			email: new FormControl(null, [
				Validators.required,
				Validators.email
			]),

			password: new FormControl(null, [
				Validators.required,
			])
		})
	}

	onSubmit (): void {
		alert('form submitted successfully')
	}

}
