import { Injectable } from '@angular/core'
import { UserInterface } from '../../interfaces/user.interface'
import { AuthRequest } from '../../requests/auth.request'
import { LocalService } from '../local/local.service'

@Injectable({
	providedIn: 'root'
})
export class AuthService {

	constructor (private authRequestService: AuthRequest) { }

	// Get the user from the token and store it in the LocalStorage
	setUser (token: string): Promise<UserInterface> {
		return new Promise<UserInterface>((resolve, reject) => {
			this.authRequestService.getUser(token).subscribe(data => {
				if (!data.id) {
					reject('Mauvais retours de l\'api')
				}

				data.token = token
				LocalService.setUser(data)
				resolve(data)
			}, e => this.handleError(e, reject))
		})
	}

	// SignIn method
	signIn (email: string, password: string): Promise<boolean> {
		return new Promise<boolean>((resolve, reject) => {
			this.authRequestService.signIn(email, password).subscribe(async data => {

				if (!data.token) {
					reject('Mauvais retours de l\'api')
				}

				localStorage.setItem('user', JSON.stringify({token: data.token}))

				if (await this.setUser(data.token)) {
					resolve(true)
				}

				reject('Aucune information d\'utilisateur')

			}, e => this.handleError(e, reject))
		})
	}

	// Register method
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
