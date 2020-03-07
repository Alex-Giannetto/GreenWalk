import { Injectable } from '@angular/core'
import { User } from '../../interfaces/user'
import { AuthRequestService } from '../../requests/auth/auth-request.service'

export const LOCAL_STORAGE_USER = 'user'

@Injectable({
	providedIn: 'root'
})
export class AuthService {

	constructor (private authRequestService: AuthRequestService) { }

	static getUser (): User {
		const localData = localStorage.getItem(LOCAL_STORAGE_USER)
		return localData ? JSON.parse(localData) as User : null
	}

	static getToken (): string {
		const user = AuthService.getUser()
		return user ? user.token : null
	}

	getUser (token: string): Promise<User> {
		const onSuccess = data => {
			if (data.id) {
				localStorage.setItem(LOCAL_STORAGE_USER, JSON.stringify(data))
			}
		}

		return new Promise<User>((resolve, reject) => {
			this.authRequestService.getUser(token).subscribe(onSuccess, e => this.handleError(e, reject))
		})
	}

	sigIn (email: string, password: string): Promise<boolean> {
		return new Promise<boolean>((resolve, reject) => {
			this.authRequestService.sigIn(email, password).subscribe(async data => {

				if (data.token) {
					const user = await this.getUser(data.token)

					console.log(user)
				}

			}, e => this.handleError(e, reject))
		})
	}

	handleError (error: string, reject: (reason) => void) {
		reject(error)
	}
}
