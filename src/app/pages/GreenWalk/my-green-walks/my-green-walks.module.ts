import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyGreenWalksPageRoutingModule } from './my-green-walks-routing.module';

import { MyGreenWalksPage } from './my-green-walks.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyGreenWalksPageRoutingModule
  ],
  declarations: [MyGreenWalksPage]
})
export class MyGreenWalksPageModule {}
