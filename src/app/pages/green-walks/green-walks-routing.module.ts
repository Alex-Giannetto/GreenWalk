import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { GreenWalksPage } from './green-walks.page'

const routes: Routes = [
	{
		path: '',
		component: GreenWalksPage
	}
]

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class GreenWalksPageRoutingModule {}
