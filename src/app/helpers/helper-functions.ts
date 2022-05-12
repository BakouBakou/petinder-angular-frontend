import {Pet} from "../model/Pet";
import {Subscription} from "rxjs";
import {environment} from "../../environments/environment";

const localImagesUrl = 'http://localhost:4200/assets/';
const remoteImagesUrl = 'https://pettinder.herokuapp.com/';

export function imageDomain(pet: Pet): string {
  if ((pet.id > 7 || pet.id === undefined) && environment.production) {
    return localImagesUrl
  }
  return remoteImagesUrl
}

export function closeSubscription(subscription: Subscription) {
  if (subscription !== undefined) {
    subscription.unsubscribe();
  }
}
