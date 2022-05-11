import {Component, OnInit} from '@angular/core';
import {PetService} from "../../service/pet.service";
import {Pet} from "../../model/Pet";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-profile-gallery',
  templateUrl: './profile-gallery.component.html',
  styleUrls: ['./profile-gallery.component.css']
})
export class ProfileGalleryComponent implements OnInit {

  pets: Pet[];
  private _selectedPet!: Pet;
  private _searchText: string = '';

  addPetForm = this.formBuilder.group({
    name: '',
    kind: '',
    image: '',
    profileText: '',
  })

  constructor(private petService: PetService, private formBuilder: FormBuilder) {
    this.pets = [];
  }

  ngOnInit(): void {
    this.getPets()
  }

  get selectedPet(): Pet {
    return this._selectedPet;
  }

  get searchText(): string {
    return this._searchText;
  }

  set searchText(value: string) {
    this._searchText = value;
  }

  addPet(pet: Pet): void {
    this.petService.addPet(pet).subscribe(() => {this.pets = [...this.pets, pet]});
  }

  private getPets(): void {
    this.petService.getPets().subscribe(result => this.pets = result);
  }

  selectPet(pet: Pet): void {
    this._selectedPet = pet;
    console.log(pet);
  }

  onSubmit(): void {
    this.addPet(this.addPetForm.value);
    console.log(this.addPetForm.value);
    this.addPetForm.reset();
  }

  imageDomain(pet: Pet): string {
    if (pet.id > 7 || pet.id === undefined) {
      return 'http://localhost:4200/assets/'
    }
    return 'https://pettinder.herokuapp.com/'
  }
}
