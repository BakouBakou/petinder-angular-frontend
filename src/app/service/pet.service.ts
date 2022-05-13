import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {map, Observable} from "rxjs";
import {Pet} from "../model/Pet";

@Injectable({
  providedIn: 'root'
})
export class PetService {

  private readonly url: string;

  constructor(private http: HttpClient) {
    this.url = `${environment.backendUrl}/pets`
  }

  getPets(): Observable<Pet[]> {
    return this.http.get<Pet[]>(this.url)
      .pipe(map(pets => pets.sort((a, b) => a.name.localeCompare(b.name))));
  }

  addPet(pet: Pet): Observable<void> {
    return this.http.post<void>(this.url, pet);
  }

  getPetByName(name: string): Observable<Pet> {
    return this.http.get<Pet>(this.url + '/' + name);
  }

  deleteById(id: number): Observable<Pet> {
    return this.http.delete<Pet>(this.url + '/' + id);
  }

  sendWhatsApp(name: string): Observable<void> {
    return this.http.post<void>(this.url + '/sendText', name);
  }

  increasePopularity(name: string): Observable<void> {
    return this.http.get<void>(this.url + '/'  + name + '/incrementPopularity');
  }

}
