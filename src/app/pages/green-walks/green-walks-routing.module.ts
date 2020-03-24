import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { GreenWalksPage } from './green-walks.page'
import { LocationModalComponent } from '../../components/location-modal/location-modal.component'

const routes: Routes = [
	{
		path: '',
		component: GreenWalksPage
	}
]

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
	entryComponents: [LocationModalComponent]
})
export class GreenWalksPageRoutingModule {}
