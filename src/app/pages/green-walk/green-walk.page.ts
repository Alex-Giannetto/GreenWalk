import { Component, OnInit } from '@angular/core'
import { GreenWalkInterface } from '../../interfaces/green-walk.interface'
import { MapService } from '../../services/map/map.service'
import { ActivatedRoute, Router } from '@angular/router'
import { LoadingController, NavController, Platform } from '@ionic/angular'
import { GreenWalkRequest } from '../../requests/green-walk.request'

@Component({
	selector: 'app-green-walk',
	templateUrl: './green-walk.page.html',
	styleUrls: ['./green-walk.page.scss'],
})
export class GreenWalkPage implements OnInit {

	greenWalk: GreenWalkInterface
	scroll: number = 0
	map: string

	constructor (
		private mapService: MapService,
		private activatedRoute: ActivatedRoute,
		private router: Router,
		private loadingController: LoadingController,
		private platform: Platform,
		private navController: NavController,
		private greenWalkRequest: GreenWalkRequest,
	) { }

	async ngOnInit () {
		const loading = await this.loadingController.create({
			spinner: 'circular',
			message: 'Veuillez patienter...',
			keyboardClose: true,
			cssClass: ['loadingController'],
		})
		await loading.present()

		const id = this.activatedRoute.snapshot.paramMap.get('id')

		this.greenWalkRequest.getOneById(id).subscribe(
			greenWalk => {
				this.greenWalk = greenWalk
				loading.dismiss().then()
			},
			() => {
				this.router.navigate(['/']).then()
				loading.dismiss().then()
			},
		)
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

	onScroll (event) {
		this.scroll = event.target.scrollTop
		console.log(event.target.scrollTop)
	}
}
