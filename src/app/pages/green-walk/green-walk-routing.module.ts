import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { GreenWalkPage } from './green-walk.page'

const routes: Routes = [
	{
		path: '',
		component: GreenWalkPage,
	},
]

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class GreenWalkPageRoutingModule {}
