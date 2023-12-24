import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Observable, Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent{

   divers: number = 0;
   dives: number = 0;
   divingCenters: number = 0;

   diversCounter!:any;
   divesCounter!:any;
   divingCenterCounter!:any;

  diversVisibility:boolean = false;
  divesVisibility:boolean = false;
  divingCentersVisibility:boolean = false;

  @ViewChild('diversBox') diversNumber!: ElementRef;
  @ViewChild('divesBox') divesNumber!: ElementRef;
  @ViewChild('divingCenterBox') divingCenterNumber!: ElementRef;

  @HostListener('document:scroll', ['$event'])
  public onViewportScroll() {
    const windowHeight = window.innerHeight;
    console.log(windowHeight)
    const boundingRectDivers = this.diversNumber.nativeElement.getBoundingClientRect();
    console.log(boundingRectDivers)
    if(boundingRectDivers.top >= 0 && boundingRectDivers.bottom <= windowHeight){

      this.diversVisibility = true;
      this.diversCounter = setInterval(() => {
        this.divers++;
        if(this.divers >= 200){
          clearInterval(this.diversCounter);
          this.divers = 200;
        }
      },60)

      this.divesVisibility = true;
      this.divesCounter = setInterval(() => {
        this.dives++;
        if(this.dives >= 1500){
          clearInterval(this.divesCounter)
          this.dives = 1500;
        }
      },2)

      this.divingCentersVisibility = true;
      this.divingCenterCounter = setInterval(() => {
        this.divingCenters++;
        if(this.divingCenters >= 120){
          clearInterval(this.divingCenterCounter)
          this.divingCenters = 120;
        }
      },50)
    }
  }




}
