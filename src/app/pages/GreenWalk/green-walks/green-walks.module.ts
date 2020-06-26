import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

import { IonicModule } from '@ionic/angular'

import { GreenWalksPage } from './green-walks.page'
import { ComponentsModule } from '../../../components/components.module'
import { LocationModalComponent } from '../../../components/location-modal/location-modal.component'
import { RouterModule } from '@angular/router'

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		ComponentsModule,
		RouterModule
	],
	declarations: [GreenWalksPage],
	entryComponents: [LocationModalComponent],
})
export class GreenWalksPageModule {}
