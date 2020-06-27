import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

import { IonicModule } from '@ionic/angular'

import { HomeTabsPageRoutingModule } from './home-tabs-routing.module'

import { HomeTabsPage } from './home-tabs.page'
import { GreenWalksPageModule } from '../GreenWalk/green-walks/green-walks.module'
import { AddGreenWalkPageModule } from '../GreenWalk/add-green-walk/add-green-walk.module'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeTabsPageRoutingModule,
    GreenWalksPageModule,
    AddGreenWalkPageModule,
  ],
  declarations: [HomeTabsPage],
})
export class HomeTabsPageModule {}
