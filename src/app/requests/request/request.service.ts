import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
	providedIn: 'root'
})
export class RequestService {

	constructor (private httpClient: HttpClient) { }

	get (url): Observable<object> {
		return this.httpClient.get(url)
	}
}
