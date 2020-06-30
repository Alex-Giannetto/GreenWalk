import { Component, OnInit } from '@angular/core'
import { GreenWalkLightInterface } from '../../../interfaces/green-walk-light.interface'
import { GreenWalkRequest } from '../../../requests/green-walk.request'
import { GeolocationService } from '../../../services/geolocation/geolocation.service'
import { ModalController } from '@ionic/angular'
import { LocalService } from '../../../services/local/local.service'
import { LocationModalComponent } from '../../../components/location-modal/location-modal.component'

@Component({
  selector: 'app-green-walks',
  templateUrl: './green-walks.page.html',
  styleUrls: ['./green-walks.page.scss'],
})
export class GreenWalksPage implements OnInit {

  state = {
    loading: false,
  }

  greenWalks: GreenWalkLightInterface[] = []

  constructor (
    private greenWalkRequestService: GreenWalkRequest,
    private geolocationService: GeolocationService,
    private modalController: ModalController,
  ) {}

  async ngOnInit () {
    this.state.loading = true
    try {
      await this.geolocationService.getLastLocation()
      await this.init()

    } catch (e) {
      console.error('GreenWalks::onInit', e)
      await this.chooseLocation()
    }
  }

  ionViewWillEnter () {
    this.init()
  }

  async chooseLocation () {
    const modal = await this.modalController.create({
      component: LocationModalComponent,
      backdropDismiss: false,
      componentProps: {
        coordinates: {
          latitude: 48.856886091827164,
          longitude: 2.341345178964275,
        },
      },
    })
    await modal.present()
    const { data: coordinates } = await modal.onWillDismiss()
    await this.geolocationService.setLocation(coordinates)
    await this.init()
  }

  async init (event = null) {
    this.state.loading = true
    this.greenWalks = await this.greenWalkRequestService.getAll(
      LocalService.location.coordinates)
    this.state.loading = false

    if (event) {
      event.target.complete()
    }
  }

}
