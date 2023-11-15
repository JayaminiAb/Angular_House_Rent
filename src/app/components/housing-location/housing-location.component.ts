import { Component, Input, OnInit } from '@angular/core';
import { HousingLocation } from 'src/app/interface/housing-location';

@Component({
  selector: 'app-housing-location',
  templateUrl: './housing-location.component.html',
  styleUrls: ['./housing-location.component.scss']
})
export class HousingLocationComponent implements OnInit {
  @Input() housingLocation!: HousingLocation;

  constructor() { }

  ngOnInit(): void {
  }

}
