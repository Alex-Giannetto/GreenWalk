import { Component } from '@angular/core'
import { GreenWalkLightInterface } from '../../../interfaces/green-walk-light.interface'
import { GreenWalkRequest } from '../../../requests/green-walk.request'
import { NavController, Platform, ToastController } from '@ionic/angular'
import * as Moment from 'moment'
import { Request } from '../../../requests/request'

@Component({
	selector: 'app-my-green-walks',
	templateUrl: './my-green-walks.page.html',
	styleUrls: ['./my-green-walks.page.scss'],
})
export class MyGreenWalksPage {
	state = {
		loading: false,
		category: 'next',
	}

	greenWalks: GreenWalkLightInterface[] = []

	constructor (
		private greenWalkRequest: GreenWalkRequest,
		private toastController: ToastController,
		private navController: NavController,
		public platform: Platform
	) {}

	// refresh the GreenWalks list
	ionViewWillEnter () {
		this.init()
	}

	// Get the GreenWalk list of the user
	init (event = null) {
		try {
			this.state.loading = true
			this.greenWalkRequest.getUserRegisteredGreenWalk().then(greenwalks => {
				this.greenWalks = greenwalks
				this.state.loading = false
			})
		} catch (e) {
			Request.HandleError(e, this.toastController, this.navController)
		} finally {
			if (event) {
				event.target.complete()
			}
		}
	}

	// Return the GreenWalk to show depending of the filter
	filter (): GreenWalkLightInterface[] {
		return this.greenWalks.filter(greenWalk => {
			if (this.state.category === 'next') {
				return Moment(greenWalk.datetime) > Moment()
			} else {
				return Moment(greenWalk.datetime) < Moment()
			}
		})
	}

}
