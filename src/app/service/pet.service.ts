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

  addPet(pet: Pet): Observable<Pet> {
    return this.http.post<Pet>(this.url, pet);
  }

}
