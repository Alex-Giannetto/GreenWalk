import { Injectable } from '@angular/core'
import { HttpClient, HttpErrorResponse, HttpHeaders, } from '@angular/common/http'
import { Observable } from 'rxjs'
import { environment } from '../../environments/environment'
import { LocalService } from '../services/local/local.service'
import { NavController, ToastController } from '@ionic/angular'

@Injectable({
	providedIn: 'root',
})
export class Request {

	constructor (private httpClient: HttpClient) { }

	// Check if the error is and authentication error => redirect to the login else show a toast error
	static HandleError (error: HttpErrorResponse, toastController: ToastController, navController: NavController) {
		if ([401, 403].indexOf(error.status)) {
			toastController.create({
				message: 'Veuillez vous reconnecter',
				duration: 2000,
				position: 'top',
				color: 'danger'
			}).then(toast => toast.present().then())
			return navController.navigateRoot('/login')
		}

		toastController.create({
			message: 'Une erreur est survenue',
			duration: 2000,
			position: 'top',
			color: 'danger'
		}).then(toast => toast.present().then())

	}

	// Get method
	get<T> (
		url: string, headers: { [key: string]: string } = null,
		prefixUrl: boolean = true, withToken: boolean = true): Observable<T> {
		url = prefixUrl ? environment.api.url + url : url
		return this.httpClient.get<T>(url, this.getHeader(headers, withToken))
	}

	// Post method
	post<T> (
		url: string, data: object, headers: { [key: string]: string } = null,
		prefixUrl: boolean = true,
		withToken: boolean = true,
	): Observable<T> {
		url = prefixUrl ? environment.api.url + url : url
		return this.httpClient.post<T>(url, data, this.getHeader(headers, withToken))
	}

	// Delete method
	delete<T> (
		url: string, headers: { [key: string]: string } = null,
		prefixUrl: boolean = true, withToken: boolean = true): Observable<T> {
		url = prefixUrl ? environment.api.url + url : url
		return this.httpClient.delete<T>(url, this.getHeader(headers, withToken))
	}

	// return the header
	getHeader (
		externalHeader: { [key: string]: string },
		withToken = true): { headers: HttpHeaders } {
		const token = LocalService.token

		const xAuthTokenHeader = withToken && token ? {
			'X-AUTH-TOKEN': token,
		} : {}
		const headers = new HttpHeaders({
			...xAuthTokenHeader,
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
			Accept: 'application/json',
			'content-type': 'application/json',
			...externalHeader,
		})
		return { headers }
	}
}
