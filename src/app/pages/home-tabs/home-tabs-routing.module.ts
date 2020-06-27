import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { HomeTabsPage } from './home-tabs.page'
import { GreenWalksPage } from '../GreenWalk/green-walks/green-walks.page'
import { AddGreenWalkPage } from '../GreenWalk/add-green-walk/add-green-walk.page'
import { EditingGuard } from '../../guards/editing.guard'

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
        path: 'add',
        component: AddGreenWalkPage,
        canDeactivate: [EditingGuard]
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
