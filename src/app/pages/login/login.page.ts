import { Component, OnInit } from '@angular/core'
import { LoadingController, MenuController, NavController, ToastController } from '@ionic/angular'
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
		private navController: NavController,
		private loadingController: LoadingController,
		private toastController: ToastController
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

	async onSubmit () {
		const { email, password } = this.formGroup.value

		const loading = await this.loadingController.create({
			message: 'Chargement…'
		})

		await loading.present()

		this.authService.signIn(email, password).then(async success => {
			this.navController.navigateRoot('/home').then()
			await loading.dismiss()
		}).catch(async e => {
			(await this.toastController.create({
				message: 'Une erreur est survenue',
				position: 'top',
				color: 'danger',
				duration: 5000
			})).present()
			await loading.dismiss()
		})
	}

}
