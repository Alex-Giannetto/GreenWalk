import { Component, OnInit } from '@angular/core'
import { GreenWalkInterface, GreenWalkTestExample } from '../../interfaces/green-walk.interface'
import { MapService } from '../../services/map/map.service'
import { ActivatedRoute, Router } from '@angular/router'
import { LoadingController, NavController, Platform } from '@ionic/angular'

@Component({
	selector: 'app-green-walk',
	templateUrl: './green-walk.page.html',
	styleUrls: ['./green-walk.page.scss'],
})
export class GreenWalkPage implements OnInit {

	greenWalk: GreenWalkInterface = GreenWalkTestExample
	map: string

	constructor (
		private mapService: MapService,
		private activatedRoute: ActivatedRoute,
		private router: Router,
		private loadingController: LoadingController,
		private platform: Platform,
		private navController: NavController
		) { }

	async ngOnInit() {
		const loading = await this.loadingController.create({
			spinner: 'circular',
			message: 'Veuillez patienter...',
			keyboardClose: true,
			cssClass: ['loadingController']
		})
		await loading.present()

		try {
			const id = this.activatedRoute.snapshot.paramMap.get('id')
			this.greenWalk = await this.greenWalkService.get(id)
		} catch (e) {
			this.router.navigate(['/']).then()
		} finally {
			await loading.dismiss()
		}
	}

	getMap (): string {
		if (!this.greenWalk) {
			return ''
		}

		const element = document.getElementById('map')

		if ((element.offsetWidth || element.offsetHeight) === 0) {
			return ''
		}

		const width = element.offsetWidth > 0 && element.offsetWidth < 1280 ? element.offsetWidth : 1280
		const height = element.offsetHeight > 0 && element.offsetHeight < 1280 ? element.offsetHeight : 1280
		this.map = this.mapService.getMap(this.greenWalk.location.coordinates, { width, height })
		return this.map
	}

}
