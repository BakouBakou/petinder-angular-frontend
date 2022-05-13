import {Pet} from "../model/Pet";
import {Subscription} from "rxjs";
import {environment} from "../../environments/environment";

const localImagesUrl = 'http://localhost:8080/';
const remoteImagesUrl = 'https://petinder-backend-baker.herokuapp.com/';

export function imageDomain(pet: Pet): string {
  if (!environment.production) {
    return localImagesUrl
  }
  return remoteImagesUrl
}

export function closeSubscription(subscription: Subscription) {
  if (subscription !== undefined) {
    subscription.unsubscribe();
  }
}
