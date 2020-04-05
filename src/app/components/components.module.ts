import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { GreenWalkCardComponent } from './green-walk-card/green-walk-card.component'
import { IonicModule } from '@ionic/angular'
import { ParticipantsComponent } from './participants/participants.component'
import { AvatarComponent } from './avatar/avatar.component'
import { LocationModalComponent } from './location-modal/location-modal.component'

@NgModule({
	imports: [
		CommonModule,
		IonicModule,
	],
	exports: [
		GreenWalkCardComponent,
		LocationModalComponent,
		ParticipantsComponent,
	],
	declarations: [
		GreenWalkCardComponent,
		ParticipantsComponent,
		AvatarComponent,
		LocationModalComponent
	]

})
export class ComponentsModule {}
