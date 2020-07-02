import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyGreenWalksPage } from './my-green-walks.page';
import { ComponentsModule } from '../../../components/components.module'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
  ],
  declarations: [MyGreenWalksPage]
})
export class MyGreenWalksPageModule {}
