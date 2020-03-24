import { Injectable } from '@angular/core'
import { UserInterface } from '../../interfaces/user.interface'
import { AuthRequest } from '../../requests/auth.request'
import { LocalService } from '../local/local.service'

@Injectable({
	providedIn: 'root'
})
export class AuthService {

	constructor (private authRequestService: AuthRequest) { }

	setUser (token: string): Promise<UserInterface> {
		return new Promise<UserInterface>((resolve, reject) => {
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
