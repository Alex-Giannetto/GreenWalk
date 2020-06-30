import { Injectable } from '@angular/core'
import { UserInterface } from '../../interfaces/user.interface'
import { LocationInterface } from '../../interfaces/location.interface'

export const LOCAL_STORAGE_USER = 'user'

@Injectable({
	providedIn: 'root'
})
export class LocalService {

	static get location (): LocationInterface {
		return JSON.parse(localStorage.getItem('location')) as LocationInterface
	}

	static get user (): UserInterface {
		const localData = localStorage.getItem(LOCAL_STORAGE_USER)
		return localData ? JSON.parse(localData) as UserInterface : null
	}

	static get token (): string {
		const user = LocalService.user
		return user ? user.token : null
	}

	static set token (token){
		localStorage.setItem('user', JSON.stringify({token}))
	}

	static setUser (user: UserInterface): void {
		localStorage.setItem(LOCAL_STORAGE_USER, JSON.stringify(user))
	}

	static clear (){
		localStorage.clear()
	}
}
