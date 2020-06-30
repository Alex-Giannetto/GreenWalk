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

  get<T> (
    url: string, headers: { [key: string]: string } = null,
    prefixUrl: boolean = true, withToken: boolean = true): Observable<T> {
    url = prefixUrl ? environment.api.url + url : url
    return this.httpClient.get<T>(url, this.getHeader(headers, withToken))
  }

  post<T> (
    url: string, data: object, headers: { [key: string]: string } = null,
    prefixUrl: boolean = true,
    withToken: boolean = true,
  ): Observable<T> {
    url = prefixUrl ? environment.api.url + url : url
    return this.httpClient.post<T>(url, data, this.getHeader(headers, withToken))
  }

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
