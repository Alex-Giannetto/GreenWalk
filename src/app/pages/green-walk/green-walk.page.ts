import { Component } from '@angular/core'
import { GreenWalkInterface } from '../../interfaces/green-walk.interface'
import { MapService } from '../../services/map/map.service'

@Component({
	selector: 'app-green-walk',
	templateUrl: './green-walk.page.html',
	styleUrls: ['./green-walk.page.scss'],
})
export class GreenWalkPage {

	greenWalk: GreenWalkInterface
	map: string

	constructor (private mapService: MapService) {}

	getMap (): void {
		const mapElementt = document.getElementById('map')

		const width = mapElementt.offsetWidth > 0 && mapElementt.offsetWidth < 1280 ? mapElementt.offsetWidth : 1280
		const height = mapElementt.offsetHeight > 0 && mapElementt.offsetHeight < 1280 ? mapElementt.offsetHeight : 1280

		this.map = this.mapService.getMap(this.greenWalk.location.coordinates, {width, height})
	}
}
