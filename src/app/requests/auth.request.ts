import { Injectable } from '@angular/core'
import { Request } from './request'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class AuthRequest {

  constructor (private requestService: Request) { }

  signIn (email: string, password: string): Observable<any> {
    return this.requestService.post('auth/signin', { email, password }, null,
      true, false)
  }

  register (
    email: string, firstname: string, birthdate: string,
    password: string): Observable<any> {
    return this.requestService.post('auth/signup',
      { email, firstname, birthdate, password }, null, true, false)
  }

  getUser (token: string): Observable<any> {
    return this.requestService.get('auth/info', { 'X-AUTH-TOKEN': token })
  }
}
