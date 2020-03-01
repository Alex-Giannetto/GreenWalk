import { Injectable } from '@angular/core'
import { User } from '../../interfaces/user'

export const LOCAL_STORAGE_USER = 'user'

@Injectable({
	providedIn: 'root'
})
export class AuthService {

	constructor () { }

	static getUser (): User {
		const localData = localStorage.getItem(LOCAL_STORAGE_USER)
		return localData ? JSON.parse(localData) as User : null
	}

	static getToken (): string {
		const user = AuthService.getUser()
		return user ? user.token : null
	}
}
