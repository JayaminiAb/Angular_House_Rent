import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingLocation } from 'src/app/interface/housing-location';
import { HousingService } from 'src/app/services/housing.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-house-details',
  templateUrl: './house-details.component.html',
  styleUrls: ['./house-details.component.scss']
})
export class HouseDetailsComponent implements OnInit {

  
    housingLocationId = -1;
    housingLocation: HousingLocation | undefined;
    applyForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      email: new FormControl('')
    });
    constructor(private route: ActivatedRoute, private housingService: HousingService) {
        this.housingLocationId = Number(this.route.snapshot.params['id']);
    }

  ngOnInit(): void {
   this.housingService.getHousingLocationById(this.housingLocationId).then(
    (housingLocation: HousingLocation | undefined) => {
      this.housingLocation = housingLocation;
    }    
    );
  }
  
  submitApplication(){
    this.housingService.submitApplication( 
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? '');
  }

}
