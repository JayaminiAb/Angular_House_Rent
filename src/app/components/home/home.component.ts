import { Component, OnInit } from '@angular/core';
import { HousingLocation } from 'src/app/interface/housing-location';
import { HousingService } from 'src/app/services/housing.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  
  housingLocationList: HousingLocation[] = [];
  filteredLocationList: HousingLocation[] = [];

  constructor(private housingService: HousingService) { }

  ngOnInit(): void {
     this.housingService.getAllHousingLocations().then(
      (housingLocationList: HousingLocation[]) => {
        
        this.housingLocationList = housingLocationList;
        this.filteredLocationList = this.housingLocationList;
      }
     );
    
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.housingLocationList;
      return;
    }
  
    this.filteredLocationList = this.housingLocationList.filter(
      housingLocation => housingLocation?.city.toLowerCase().includes(text.toLowerCase())
    );
  }

}
