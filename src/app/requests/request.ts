import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'
import { environment } from '../../environments/environment'
import { LocalService } from '../services/local/local.service'

@Injectable({
	providedIn: 'root',
})
export class Request {

	constructor (private httpClient: HttpClient) { }

	get (url: string, headers: { [key: string]: string } = null, prefixUrl: boolean = true): Observable<object> {
		url = prefixUrl ? environment.api.url + url : url
		return this.httpClient.get(url, this.getHeader(headers))
	}

	post (
		url: string, data: object, headers: { [key: string]: string } = null,
		prefixUrl: boolean = true): Observable<object> {
		url = prefixUrl ? environment.api.url + url : url
		return this.httpClient.post(url, data, this.getHeader(headers))
	}

	getHeader (externalHeader: { [key: string]: string }): { headers: HttpHeaders } {
		const token = LocalService.token

		const xAuthTokenHeader = token ? {
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
