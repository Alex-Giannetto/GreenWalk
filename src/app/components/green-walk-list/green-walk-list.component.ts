import { Component, Input } from '@angular/core'
import { GreenWalkLightInterface } from '../../interfaces/green-walk-light.interface'

@Component({
  selector: 'app-green-walk-list',
  templateUrl: './green-walk-list.component.html',
  styleUrls: ['./green-walk-list.component.scss'],
})
export class GreenWalkListComponents {
  @Input() greenWalks: GreenWalkLightInterface[] = []
}
