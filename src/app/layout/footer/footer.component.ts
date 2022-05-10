import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  private _year: number;

  constructor() {
    this._year = new Date().getFullYear();
  }

  get year(): number {
    return this._year;
  }

  ngOnInit(): void {
  }

}
