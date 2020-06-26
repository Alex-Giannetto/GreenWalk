import { Component, OnInit } from '@angular/core'

import { Platform } from '@ionic/angular'
import { SplashScreen } from '@ionic-native/splash-screen/ngx'
import { StatusBar } from '@ionic-native/status-bar/ngx'
import { UserInterface } from './interfaces/user.interface'
import { LocalService } from './services/local/local.service'

@Component({
	selector: 'app-root',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
	public selectedIndex = 0
	public appPages = [
		{
			title: 'Liste des sorties',
			url: '/',
			icon: 'walk',
		},
		{
			title: 'Créer une sortie',
			url: '/green-walks/add',
			icon: 'add',
		}
	]

	public user: UserInterface = LocalService.user

	constructor (
		private platform: Platform,
		private splashScreen: SplashScreen,
		private statusBar: StatusBar,
	) {
		this.initializeApp()
	}

	initializeApp () {
		this.platform.ready().then(() => {
			this.statusBar.styleDefault()
			this.splashScreen.hide()
		})
	}

	ngOnInit () {
		const path = window.location.pathname.split('folder/')[1]
		if (path !== undefined) {
			this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase())
		}
	}
}
