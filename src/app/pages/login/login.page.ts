import { Component, OnInit } from '@angular/core'
import { MenuController, NavController } from '@ionic/angular'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { AuthService } from '../../services/auth/auth.service'

@Component({
	selector: 'app-login',
	templateUrl: './login.page.html',
	styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

	formGroup: FormGroup

	constructor (
		private menuController: MenuController,
		private formBuilder: FormBuilder,
		private authService: AuthService,
		private navController: NavController
	) { }

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
		const { email, password } = this.formGroup.value
		this.authService.signIn(email, password).then(success => {
			this.navController.navigateRoot('/home').then()
		})
	}

}
