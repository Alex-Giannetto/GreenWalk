import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { GreenWalkCardComponent } from './green-walk-card/green-walk-card.component'
import { IonicModule } from '@ionic/angular'

@NgModule({
	imports: [
		CommonModule,
		IonicModule,
	],
	exports: [],
	declarations: [
		GreenWalkCardComponent
	]
})
export class ComponentsModule {}
