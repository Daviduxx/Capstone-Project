import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Observable, Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements AfterViewInit{

   // need to fins how to dinamically fill this props

   divers: number = 0;
   dives: number = 0;
   divingCenters: number = 0;

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

  // sub!: Subscription;
  // ons$: Observable<number> = timer(200, 10);

  // ngOnInit(): void {
  //  this.sub = this.ons$.subscribe(() => {
  //   this.divesNumber();
  //   this.diversNumber();
  //   this.divingCNumber();
  //   this.divesDiv();
  //   this.diversDiv();
  //   this.divingCDiv();
  //  })
  // }

  // private divesNumber(){
  //   this.dives += 1;
  // }

  // private diversNumber(){
  //   this.divers += 1;
  // }

  // private divingCNumber(){
  //   this.divingCenters += 1;
  // }

  // private divesDiv() {
  //   if (this.dives === 4000) {
  //     this.sub.unsubscribe()
  //   }
  // }

  // private diversDiv() {
  //   if (this.divers === 1000) {
  //     this.sub.unsubscribe()
  //   }
  // }
  // private divingCDiv() {
  //   if (this.divingCenters === 500) {
  //     this.sub.unsubscribe()
  //   }
  // }


}
