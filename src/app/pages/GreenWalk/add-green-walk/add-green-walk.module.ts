import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

import { IonicModule } from '@ionic/angular'

import { AddGreenWalkPage } from './add-green-walk.page'

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
	],
	declarations: [AddGreenWalkPage],
})
export class AddGreenWalkPageModule {}
