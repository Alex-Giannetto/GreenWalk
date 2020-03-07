import { Injectable } from '@angular/core'
import { User } from '../../interfaces/user'

export const LOCAL_STORAGE_USER = 'user'

@Injectable({
	providedIn: 'root'
})
export class LocalService {

	static getUser (): User {
		const localData = localStorage.getItem(LOCAL_STORAGE_USER)
		return localData ? JSON.parse(localData) as User : null
	}

	static getToken (): string {
		const user = LocalService.getUser()
		return user ? user.token : null
	}

	static setUser (user: User): void {
		localStorage.setItem(LOCAL_STORAGE_USER, JSON.stringify(user))
	}
}
