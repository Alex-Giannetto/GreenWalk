import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

import { IonicModule } from '@ionic/angular'

import { HomeTabsPageRoutingModule } from './home-tabs-routing.module'

import { HomeTabsPage } from './home-tabs.page'
import { GreenWalksPageModule } from '../GreenWalk/green-walks/green-walks.module'
import { AddGreenWalkPageModule } from '../GreenWalk/add-green-walk/add-green-walk.module'
import { MyGreenWalksPageModule } from '../GreenWalk/my-green-walks/my-green-walks.module'
import { ProfilePageModule } from '../profile/profile.module'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeTabsPageRoutingModule,
    GreenWalksPageModule,
    MyGreenWalksPageModule,
    AddGreenWalkPageModule,
    ProfilePageModule,
  ],
  declarations: [HomeTabsPage],
})
export class HomeTabsPageModule {}
