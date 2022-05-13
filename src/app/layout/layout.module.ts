import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {LayoutComponent} from './layout/layout.component';
import {RouterModule} from "@angular/router";
import {ProfileGalleryComponent} from "../profile-gallery/profile-gallery.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NameFilterPipe} from "../pipes/name-filter.pipe";
import {PopularityLabelPipe} from "../pipes/popularity-label.pipe";


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ProfileGalleryComponent,
    LayoutComponent,
    NameFilterPipe,
    PopularityLabelPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    LayoutComponent
  ]
})
export class LayoutModule { }
