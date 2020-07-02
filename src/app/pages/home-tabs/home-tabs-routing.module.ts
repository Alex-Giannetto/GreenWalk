import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { HomeTabsPage } from './home-tabs.page'
import { GreenWalksPage } from '../GreenWalk/green-walks/green-walks.page'
import { AddGreenWalkPage } from '../GreenWalk/add-green-walk/add-green-walk.page'
import { MyGreenWalksPage } from '../GreenWalk/my-green-walks/my-green-walks.page'
import { ProfilePage } from '../profile/profile.page'

const routes: Routes = [
  {
    path: '',
    component: HomeTabsPage,
    children: [
      {
        path: 'all',
        component: GreenWalksPage,
      },
      {
        path: 'registered',
        component: MyGreenWalksPage,
      },
      {
        path: 'add',
        component: AddGreenWalkPage,
      },
      {
        path: 'profile',
        component: ProfilePage
      },
      {
        path: '**',
        redirectTo: 'all',
      },
    ],
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeTabsPageRoutingModule {}
