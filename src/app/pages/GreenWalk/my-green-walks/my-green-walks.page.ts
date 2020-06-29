import { Component, OnInit } from '@angular/core'
import { GreenWalkLightInterface } from '../../../interfaces/green-walk-light.interface'
import { LocalService } from '../../../services/local/local.service'
import { GreenWalkRequest } from '../../../requests/green-walk.request'
import { Platform } from '@ionic/angular'
import * as Moment from 'moment'

@Component({
  selector: 'app-my-green-walks',
  templateUrl: './my-green-walks.page.html',
  styleUrls: ['./my-green-walks.page.scss'],
})
export class MyGreenWalksPage {
  state = {
    loading: false,
    category: 'next',
  }

  greenWalks: GreenWalkLightInterface[] = []

  constructor (
    private greenWalkRequest: GreenWalkRequest,
    public platform: Platform,
  ) {}

  ionViewWillEnter(){
    this.init()
  }

  init (event = null) {
    this.state.loading = true
    this.greenWalkRequest.getUserRegisteredGreenWalk().then( greenwalks => {
        this.greenWalks = greenwalks
        this.state.loading = false

        if (event) {
          event.target.complete()
        }
      })
  }

  filter (): GreenWalkLightInterface[] {
    return this.greenWalks.filter(greenWalk => {
      if (this.state.category === 'next') {
        return Moment(greenWalk.datetime) > Moment()
      } else {
        return Moment(greenWalk.datetime) < Moment()
      }
    })
  }

}
