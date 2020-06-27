import {NgModule} from '@angular/core'
import {GreenWalksPage} from './green-walks/green-walks.page'
import {RouterModule, Routes} from '@angular/router'
import {GreenWalksPageModule} from './green-walks/green-walks.module'
import {GreenWalkPage} from './green-walk/green-walk.page'
import {GreenWalkPageModule} from './green-walk/green-walk.module'
import {AddGreenWalkPage} from './add-green-walk/add-green-walk.page'
import {AddGreenWalkPageModule} from './add-green-walk/add-green-walk.module'
import { EditingGuard } from '../../guards/editing.guard'

const routes: Routes = [
    {
        path: '',
        component: GreenWalksPage,
    },
    {
        path: 'add',
        component: AddGreenWalkPage,
        pathMatch: 'full',
        canDeactivate: [EditingGuard]
    },
    {
        path: ':id',
        component: GreenWalkPage,
    },
]

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        GreenWalksPageModule,
        GreenWalkPageModule,
        AddGreenWalkPageModule,
    ],
})
export class GreenWalkModule {
}
