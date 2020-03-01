import { Injectable } from '@angular/core'
import { User } from '../../interfaces/user'

export const LOCAL_STORAGE_USER = 'user'

@Injectable({
	providedIn: 'root'
})
export class AuthService {

	constructor () { }

	getUser (): User {
		const localData = localStorage.getItem(LOCAL_STORAGE_USER)
		return localData ? JSON.parse(localData) as User : null
	}
}
