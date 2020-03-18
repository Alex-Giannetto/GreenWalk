import { Injectable } from '@angular/core'
import { User } from '../../interfaces/user'
import { AuthRequestService } from '../../requests/auth-request.service'
import { LocalService } from '../local/local.service'

@Injectable({
	providedIn: 'root'
})
export class AuthService {

	constructor (private authRequestService: AuthRequestService) { }

	setUser (token: string): Promise<User> {
		return new Promise<User>((resolve, reject) => {
			this.authRequestService.getUser(token).subscribe(data => {
				if (!data.id) {
					reject('Mauvais retours de l\'api')
				}

				LocalService.setUser(data)
				resolve(data)
			}, e => this.handleError(e, reject))
		})
	}

	signIn (email: string, password: string): Promise<boolean> {
		return new Promise<boolean>((resolve, reject) => {
			this.authRequestService.signIn(email, password).subscribe(async data => {

				if (!data.token) {
					reject('Mauvais retours de l\'api')
				}

				if (await this.setUser(data.token)) {
					resolve(true)
				}

				reject('Aucune information d\'utilisateur')

			}, e => this.handleError(e, reject))
		})
	}

	register (email: string, firstName: string, birthDate: string, password: string): Promise<boolean> {
		return new Promise<boolean>((resolve, reject) => {
			this.authRequestService.register(email, firstName, birthDate, password).subscribe(async data => {
				if (!data.token) {
					reject('Mauvais retours de l\'api')
				}

				if (await this.setUser(data.token)) {
					resolve(true)
				}

				reject('Aucune information d\'utilisateur')

			}, e => this.handleError(e, reject))
		})
	}

	private handleError (error: string, reject: (reason) => void) {
		reject(error)
	}
}
