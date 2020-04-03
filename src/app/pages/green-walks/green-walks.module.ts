import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

import { IonicModule } from '@ionic/angular'

import { GreenWalksPageRoutingModule } from './green-walks-routing.module'

import { GreenWalksPage } from './green-walks.page'
import { ComponentsModule } from '../../components/components.module'
import { LocationModalComponent } from '../../components/location-modal/location-modal.component'

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		GreenWalksPageRoutingModule,
		ComponentsModule
	],
	declarations: [GreenWalksPage],
	entryComponents: [LocationModalComponent],
})
export class GreenWalksPageModule {}
