import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

import { IonicModule } from '@ionic/angular'

import { GreenWalksPageRoutingModule } from './green-walks-routing.module'

import { GreenWalksPage } from './green-walks.page'

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		GreenWalksPageRoutingModule
	],
	declarations: [GreenWalksPage]
})
export class GreenWalksPageModule {}
