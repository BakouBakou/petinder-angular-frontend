import {Component, OnInit} from '@angular/core';
import {PetService} from "../../service/pet.service";
import {Pet} from "../../model/Pet";

@Component({
  selector: 'app-profile-gallery',
  templateUrl: './profile-gallery.component.html',
  styleUrls: ['./profile-gallery.component.css']
})
export class ProfileGalleryComponent implements OnInit {

  pets: Pet[];
  private _selectedPet!: Pet;
  private _searchText: string = '';

  constructor(private petService: PetService) {
    this.pets = [];
  }

  ngOnInit(): void {
    this.getPets()
  }

  get selectedPet(): Pet {
    return this._selectedPet;
  }
  set selectedPet(value: Pet) {
    this._selectedPet = value;
  }

  get searchText(): string {
    return this._searchText;
  }

  set searchText(value: string) {
    this._searchText = value;
  }

  private getPets(): void {
    this.petService.getPets().subscribe(result => this.pets = result);
  }

  selectPet(pet: Pet): void {
    this._selectedPet = pet;
  }
}
