import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'
import { environment } from '../../../environments/environment'
import { LocalService } from '../../services/local/local.service'

@Injectable({
	providedIn: 'root'
})
export class RequestService {

	constructor (private httpClient: HttpClient) { }

	get (url: string, headers: { [key: string]: string } = null, prefixUrl: boolean = true): Observable<object> {
		url = prefixUrl ? environment.api.url + url : url
		return this.httpClient.get(url, this.getHeader(headers))
	}

	post (url: string, data: object, headers: { [key: string]: string } = null, prefixUrl: boolean = true): Observable<object> {
		url = prefixUrl ? environment.api.url + url : url
		return this.httpClient.post(url, data, this.getHeader(headers))
	}

	getHeader (headers: { [key: string]: string }): { headers: HttpHeaders } {
		const token = LocalService.getToken()

		const xAuthTokenHeader = token ? {
			'X-AUTH-TOKEN': token,
		} : {}

		return {
			headers: new HttpHeaders({ ...xAuthTokenHeader, ...headers })
		}
	}
}
