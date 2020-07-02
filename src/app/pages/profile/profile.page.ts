import { Component } from '@angular/core'
import { LocalService } from '../../services/local/local.service'
import { UserInterface } from '../../interfaces/user.interface'
import { NavController, ToastController } from '@ionic/angular'

@Component({
	selector: 'app-profile',
	templateUrl: './profile.page.html',
	styleUrls: ['./profile.page.scss'],
})
export class ProfilePage {

	state = {
		mail: true,
	}

	user: UserInterface = LocalService.user

	constructor (
		private navController: NavController,
		private toastController: ToastController) {}

	// show the "next update" toast
	async toastNextVersion () {
		await (await this.toastController.create({
			message: 'Cette fonction n\'est pas encore disponible',
			duration: 2000,
			color: 'light',
			position: 'top'
		})).present()
	}

	// clear the localStorage and redirect to the login screen
	logOut () {
		LocalService.clear()
		this.navController.navigateRoot('/login').then()
	}
}
