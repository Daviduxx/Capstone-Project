import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Observable, Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements AfterViewInit{

   divers: number = 0;
   dives: number = 0;
   divingCenters: number = 0;

   // this doesn't work. Need to find how to load this components only if visible in the viewport
  ngAfterViewInit(): void {
    console.log('view init');
  }

  diversCounter = setInterval(() => {
    this.divers++;
    if(this.divers === 200){
      clearInterval(this.diversCounter)
    }
  },30)

  divesCounter = setInterval(() => {
    this.dives++;
    if(this.dives === 1500){
      clearInterval(this.divesCounter)
    }
  },2)

  divingCenterCounter = setInterval(() => {
    this.divingCenters++;
    if(this.divingCenters === 120){
      clearInterval(this.divingCenterCounter)
    }
  },50)
}
