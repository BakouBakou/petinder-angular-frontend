import {Component, OnDestroy, OnInit} from '@angular/core';
import {PetService} from "../service/pet.service";
import {Pet} from "../model/Pet";
import {FormBuilder} from "@angular/forms";
import {Subscription} from "rxjs";
import {closeSubscription, imageDomain} from "../helpers/helper-functions";


@Component({
  selector: 'app-profile-gallery',
  templateUrl: './profile-gallery.component.html',
  styleUrls: ['./profile-gallery.component.css']
})
export class ProfileGalleryComponent implements OnInit, OnDestroy {

  pets: Pet[] = [];
  private _selectedPet!: Pet;
  private _searchText: string = '';
  private getPetsSubscription!: Subscription;
  private addPetSubscription!: Subscription;

  imageDomain: Function = imageDomain;

  addPetForm = this.formBuilder.group({
    name: '',
    kind: '',
    image: '',
    profileText: '',
  })

  constructor(private petService: PetService, private formBuilder: FormBuilder) {
  }

  ngOnDestroy(): void {
        closeSubscription(this.addPetSubscription);
        closeSubscription(this.getPetsSubscription);
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
    this.addPetSubscription = this.petService.addPet(pet).subscribe(() => {
      // this.pets = [...this.pets, pet]; // this works
      this.getPets(); // but I prefer this, as it is immediately sorted at the same time, though it makes an API call
    });
  }

  private getPets(): void {
    this.getPetsSubscription = this.petService.getPets().subscribe(result => this.pets = result);
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

  deletePet(pet:Pet): void {
    this.petService.deleteById(pet.id).subscribe(() => {
      this.getPets();
    });

  }

}
