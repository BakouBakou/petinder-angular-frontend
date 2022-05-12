import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PetService} from "../../service/pet.service";
import {Pet} from "../../model/Pet";
import {Subscription} from "rxjs";
import {closeSubscription, imageDomain} from 'src/app/helpers/helper-functions';

@Component({
  selector: 'app-setup-date',
  templateUrl: './setup-date.component.html',
  styleUrls: ['./setup-date.component.css']
})
export class SetupDateComponent implements OnInit, OnDestroy {
  pet!: Pet;
  getPetByNameSubscription!: Subscription;

  imageDomain: Function = imageDomain;

  constructor(private route: ActivatedRoute, private petService: PetService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      console.log(paramMap);
      let name = paramMap.get('name');
      this.getPetByName(name || '');
    });
  }

  ngOnDestroy(): void {
    closeSubscription(this.getPetByNameSubscription);
  }

  private getPetByName(name: string): void {
    this.getPetByNameSubscription = this.petService.getPetByName(name).subscribe(result => this.pet = result);
  }
}
