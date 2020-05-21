import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

import { IonicModule } from '@ionic/angular'

import { GreenWalkPageRoutingModule } from './green-walk-routing.module'

import { GreenWalkPage } from './green-walk.page'
import { ComponentsModule } from '../../components/components.module'
import { PipesModule } from '../../pipes/pipes.module'

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		GreenWalkPageRoutingModule,
		ComponentsModule,
		PipesModule,
	],
	declarations: [GreenWalkPage],
})
export class GreenWalkPageModule {}
