import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit{

  addDive!: FormGroup;
  diveType: string[] = [];
  waterType: string[] = [];
  waterTasteOptions: string[] = ['Fresh', 'Salty'];
  weather:string[] = ['Sunny', 'Slightly Cloudy', 'Cloudy', 'Rainy', 'Windy', 'Foggy'];
  visibility:string[] = ['Excellent', 'Good', 'Bad'];
  waves:string[] = ['None', 'Little', 'Medium', 'High'];
  current:string[] = ['None', 'Small', 'Medium', 'Strong'];
  suit:string[] = ['None', 'Spring Wetsuit', 'Full 3mm', 'Full 5mm', 'Full 7mm', 'Semi Dry', 'Dry'];
  tank:string[] = ['Steel', 'Aluminum', 'Other'];
  gasMix:String[] = ['Air', 'EANX32', 'EANX36', 'EANX40', 'TRIMIX', 'Rebreather'];
  judgement:string[] = ['Excellent', 'Good', 'Medium', 'Very Bad'];

  ngOnInit(): void {
    this.diveType = ['Boat', 'Jetty', 'Shore'];
    this.waterType = ['River', 'Lake', 'Ocean', 'Cave', 'Ice', 'Other'];
    this.addDive = new FormGroup({
      name: new FormControl(null),
      date: new FormControl(null),
      type: new FormControl(null),
      maxDepth: new FormControl(null),
      diveTime: new FormControl(null),
      waterType: new FormControl(null),
      waterTaste: new FormControl(null),
      weather: new FormControl(null),
      airTemperature: new FormControl(null),
      surfaceTemperature: new FormControl(null),
      deepTemperature: new FormControl(null),
      visibility: new FormControl(null),
      waves: new FormControl(null),
      current: new FormControl(null),
      suit: new FormControl(null),
      ballast: new FormControl(null),
      tank: new FormControl(null),
      tankSize: new FormControl(null),
      gasMix: new FormControl(null),
      initialPressure: new FormControl(null),
      finalPressure: new FormControl(null),
      usedAir: new FormControl(null),
      judgement: new FormControl(null),
      notes: new FormControl(null),
      buddy: new FormControl(null),
    });
  }


}
