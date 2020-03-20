import { Injectable } from '@angular/core'
import { UserInterface } from '../../interfaces/user.interface'

export const LOCAL_STORAGE_USER = 'user'

@Injectable({
	providedIn: 'root'
})
export class LocalService {

	static getUser (): UserInterface {
		const localData = localStorage.getItem(LOCAL_STORAGE_USER)
		return localData ? JSON.parse(localData) as UserInterface : null
	}

	static getToken (): string {
		const user = LocalService.getUser()
		return user ? user.token : null
	}

	static setUser (user: UserInterface): void {
		localStorage.setItem(LOCAL_STORAGE_USER, JSON.stringify(user))
	}
}
