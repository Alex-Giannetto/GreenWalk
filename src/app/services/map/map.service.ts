import { Injectable } from '@angular/core'
import { environment } from '../../../environments/environment'

@Injectable({
	providedIn: 'root'
})
export class MapService {
	getMap (location: { longitude: number, latitude: number }, size: { height: number, width: number }): string {
		// tslint:disable-next-line:max-line-length
		return `https://api.mapbox.com/styles/v1/mapbox/${this.getStyle()}/static/pin-s-circle+669d34(${location.longitude},${location.latitude})/${location.longitude},${location.latitude},10,0/${size.width}x${size.height}@2x?access_token=${environment.mapBox.token}&attribution=false&logo=false`
	}

	private getStyle (): string {
		console.log('is dark ?', window.matchMedia('(prefers-color-scheme: dark)').matches)
		return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark-v10' : 'streets-v11'
	}
}
