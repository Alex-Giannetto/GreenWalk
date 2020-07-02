import { Injectable } from '@angular/core'
import { environment } from '../../../environments/environment'
import { CoordinatesInterface } from '../../interfaces/coordinates.Interface'

@Injectable({
	providedIn: 'root'
})
export class MapService {

	// return the url to display the map
	getMap (location: CoordinatesInterface, size: { height: number, width: number, zoom: number }): string {
		// tslint:disable-next-line:max-line-length
		return `https://api.mapbox.com/styles/v1/${this.getStyle()}/static/pin-s-circle+285A98(${location.longitude},${location.latitude})/${location.longitude},${location.latitude},${size.zoom},0/${size.width}x${size.height}@2x?access_token=${environment.mapBox.token}&attribution=false&logo=false`
	}

	// check with map style shoumd be used (dark or light) depends on the current color-scheme
	getStyle (): string {
		return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'alexg78bis/ckby49ptm2mmr1io3jgqxool4' : 'mapbox/streets-v11'
	}
}
