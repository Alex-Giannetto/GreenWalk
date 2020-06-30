import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { GreenWalkLightInterface } from '../interfaces/green-walk-light.interface'
import { CoordinatesInterface } from '../interfaces/coordinates.Interface'
import { GreenWalkInterface } from '../interfaces/green-walk.interface'
import { Request } from './request'

@Injectable({
  providedIn: 'root',
})
export class GreenWalkRequest {

  constructor (private requestService: Request) { }

  private static convertGreenWalkLight (data: any): GreenWalkLightInterface {
    return {
      id: data.id,
      name: data.name,
      datetime: data.datetime,
      author: data.author,
      participants: data.participants,
      location: {
        street: data.street,
        zipCode: data.zipCode,
        city: data.city,
        coordinates: {
          latitude: data.latitude,
          longitude: data.longitude,
        },
      },
    }
  }

  private static convertGreenWalk (data: any): GreenWalkInterface {
    return {
      ...GreenWalkRequest.convertGreenWalkLight(data),
      description: data.description,
      state: data.state,
      comments: data.comments,
    }
  }

  getAll (coordinates: CoordinatesInterface): Promise<GreenWalkLightInterface[]> {
    const url = `greenwalk/coordinate/${coordinates.latitude}/${coordinates.longitude}`

    return new Promise<GreenWalkLightInterface[]>((resolve, reject) => {
      this.requestService.get(url).subscribe(
        (data: any[]) => resolve(
          data.map(GreenWalkRequest.convertGreenWalkLight)),
        reject,
      )
    })
  }

  getOneById (id: string): Promise<GreenWalkInterface> {
    const url = `greenwalk/${id}`

    return new Promise<GreenWalkInterface>((resolve, reject) => {
      this.requestService.get(url).subscribe(
        (data: any[]) => resolve(GreenWalkRequest.convertGreenWalk(data)),
        reject,
      )
    })
  }

  getUserRegisteredGreenWalk (): Promise<GreenWalkLightInterface[]> {
    const url = `greenwalk/getGreenwalk`

    return new Promise<GreenWalkLightInterface[]>((resolve, reject) => {
      this.requestService.get(url).subscribe(
        (data: any[]) => resolve(
          data.map(GreenWalkRequest.convertGreenWalkLight)),
        reject,
      )
    })
  }

  add (greenwalk: GreenWalkInterface): Observable<any> {
    return this.requestService.post('greenwalk', { ...greenwalk })
  }

  registerUnregister (id: string, registered: boolean): Promise<boolean> {
    const url = `greenwalk/${id}/${registered ? 'unsubscribe' : 'subscribe'}`
    return this.requestService.get<boolean>(url).toPromise<boolean>()
  }

  delete (id: string): Promise<boolean> {
    const url = `greenwalk/${id}`
    return this.requestService.delete<boolean>(url).toPromise<boolean>()
  }

}
