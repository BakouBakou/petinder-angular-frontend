import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PetService} from "../../service/pet.service";
import {Pet} from "../../model/Pet";
import {Subscription} from "rxjs";
import {closeSubscription, imageDomain} from 'src/app/helpers/helper-functions';
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-setup-date',
  templateUrl: './setup-date.component.html',
  styleUrls: ['./setup-date.component.css']
})
export class SetupDateComponent implements OnInit, OnDestroy {
  pet!: Pet;
  getPetByNameSubscription!: Subscription;

  imageDomain: Function = imageDomain;

  sendTextForm = this.formBuilder.group({
    name: '',
  })

  private routeParamSubscription!: Subscription;

  constructor(private route: ActivatedRoute, private petService: PetService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.routeParamSubscription = this.route.paramMap.subscribe(paramMap => {
      console.log(paramMap);
      let name = paramMap.get('name');
      this.getPetByName(name || '');
    });
  }

  ngOnDestroy(): void {
    closeSubscription(this.getPetByNameSubscription);
    closeSubscription(this.routeParamSubscription);

  }

  private getPetByName(name: string): void {
    this.getPetByNameSubscription = this.petService.getPetByName(name).subscribe(result => this.pet = result);
  }

  onSubmitLetsPlay() {
    // this.sendMessage(); //not working for now -> "Username cannot be null"
    console.log(this.sendTextForm.value);
  }

  sendMessage() {
    this.petService.sendWhatsApp(this.sendTextForm.value).subscribe(()=>{});
  }
}
