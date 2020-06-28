import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { GreenWalkCardComponent } from './green-walk-card/green-walk-card.component'
import { IonicModule } from '@ionic/angular'
import { ParticipantsComponent } from './participants/participants.component'
import { AvatarComponent } from './avatar/avatar.component'
import { LocationModalComponent } from './location-modal/location-modal.component'
import { PipesModule } from '../pipes/pipes.module'
import { GreenWalkListComponents } from './green-walk-list/green-walk-list.component'
import { RouterModule } from '@angular/router'

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    PipesModule,
    RouterModule,
  ],
  exports: [
    GreenWalkCardComponent,
    LocationModalComponent,
    ParticipantsComponent,
    GreenWalkListComponents,
  ],
  declarations: [
    GreenWalkCardComponent,
    ParticipantsComponent,
    AvatarComponent,
    LocationModalComponent,
    GreenWalkListComponents
  ],

})
export class ComponentsModule {}
