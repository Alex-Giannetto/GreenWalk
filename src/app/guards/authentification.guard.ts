import { Injectable } from '@angular/core'
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router'
import { Observable } from 'rxjs'
import { LocalService } from '../services/local/local.service'
import { NavController } from '@ionic/angular'

@Injectable({
	providedIn: 'root'
})
export class AuthentificationGuard implements CanActivate {

	constructor (private navController: NavController) {
	}

	// This function checks if the user is logged in.
	// It redirects the user to the login page if this is not the case.
	// It is used in routing files
	canActivate (
		next: ActivatedRouteSnapshot,
		state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

		if (LocalService.user) {
			return true
		}

		this.navController.navigateRoot('/login').then()

		return false
	}

}
