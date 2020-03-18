import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

import { IonicModule } from '@ionic/angular'

import { GreenWalksPageRoutingModule } from './green-walks-routing.module'

import { GreenWalksPage } from './green-walks.page'
import { ComponentsModule } from '../../components/components.module'

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		GreenWalksPageRoutingModule,
		ComponentsModule
	],
	declarations: [GreenWalksPage]
})
export class GreenWalksPageModule {}
