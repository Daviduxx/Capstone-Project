import { Component } from '@angular/core';
import { iDives } from 'src/app/interfaces/i-dive';

@Component({
  selector: 'app-divedetail',
  templateUrl: './divedetail.component.html',
  styleUrls: ['./divedetail.component.scss']
})
export class DivedetailComponent {

  dive!:iDives;

}
