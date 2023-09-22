import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DropdownModule } from 'primeng/dropdown';
import { iUser } from 'src/app/interfaces/iuser';
import { UserService } from '../../user.service';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})

export class AddComponent implements OnInit{

  user!: iUser;

  constructor ( private uSvc:UserService, private route:ActivatedRoute, private dPipe:DatePipe ) { }

  addDive!: FormGroup;

  userId!: number;

  diveType: string[] = [];
  waterType: string[] = [];
  waterTasteOptions: string[] = ['Fresh Water', 'Salty Water'];
  weather:string[] = ['Sunny', 'Slightly Cloudy', 'Cloudy', 'Rainy', 'Windy', 'Foggy'];
  visibility:string[] = ['Excellent', 'Good', 'Bad'];
  waves:string[] = ['None', 'Little', 'Medium', 'High'];
  current:string[] = ['None', 'Small', 'Medium', 'Strong'];
  suit:string[] = ['None', 'Spring Wetsuit', 'Full 3mm', 'Full 5mm', 'Full 7mm', 'Semi Dry', 'Dry'];
  tank:string[] = ['Steel', 'Aluminum', 'Other'];
  gasMix:String[] = ['Air', 'EANX32', 'EANX36', 'EANX40', 'TRIMIX', 'Rebreather'];
  judgement:string[] = ['Excellent', 'Good', 'Medium', 'Very Bad'];

  ngOnInit(): void {

    // this.user = this.route.snapshot.params['username'];
    // console.log(this.userId)
    this.user = this.uSvc.getUserData();

    console.log(this.user.id);

    //this.userId = this.user.id;

    this.diveType = ['Boat', 'Jetty', 'Shore'];
    this.waterType = ['River', 'Lake', 'Ocean', 'Cave', 'Ice', 'Other'];
    this.addDive = new FormGroup({
      name: new FormControl(null), //ok
      date: new FormControl(null), //ok
      type: new FormControl(null), //ok
      maxDepth: new FormControl(null), //ok
      diveTime: new FormControl(null), //ok
      waterType: new FormControl(null), //ok
      waterTaste: new FormControl(null), //ok
      weather: new FormControl(null), //ok
      airTemperature: new FormControl(null), //ok
      surfaceTemperature: new FormControl(null), //ok
      deepTemperature: new FormControl(null), //ok
      visibility: new FormControl(null), //ok
      waves: new FormControl(null), //ok
      current: new FormControl(null), //ok
      suit: new FormControl(null), //ok
      ballast: new FormControl(null), // ok
      tank: new FormControl(null), // ok
      tankSize: new FormControl(null), //ok
      gasMix: new FormControl(null), // ok
      initialPressure: new FormControl(null), //ok
      finalPressure: new FormControl(null), //ok
      usedAir: new FormControl(null), //ok
      judgement: new FormControl(null),
      notes: new FormControl(null),
      buddy: new FormControl(null),
    });



  }

  addDiveSession(){

    console.log(this.addDive.value);

    this.addDive.value.date = this.dPipe.transform(this.addDive.value.date, 'yyyy-MM-dd');
    console.log(this.addDive.value.date);

    let value:string = this.addDive.get('type')?.value;
    this.addDive.value.type = value.toUpperCase();
    console.log(this.addDive.value.type);

    let waterType:string = this.addDive.get('waterType')?.value;
    this.addDive.value.waterType = waterType.toUpperCase();
    console.log(this.addDive.value.waterType);

    let waterTaste:string = this.addDive.get('waterTaste')?.value;
    waterTaste = waterTaste.replace(" ", "_");
    this.addDive.value.waterTaste = waterTaste.toUpperCase();
    console.log(this.addDive.value.waterTaste);

    let weather:string = this.addDive.get('weather')?.value;
    weather = weather.replace(" ", "_");
    this.addDive.value.weather = weather.toUpperCase();
    console.log(this.addDive.value.weather);

    console.log(this.addDive.value.airTemperature);
    console.log(this.addDive.value.surfaceTemperature);
    console.log(this.addDive.value.deepTemperature);

    let visibility:string = this.addDive.get('visibility')?.value;
    this.addDive.value.visibility = visibility.toUpperCase();
    console.log(this.addDive.value.visibility);

    let waves:string = this.addDive.get('waves')?.value;
    this.addDive.value.waves = waves.toUpperCase();
    console.log(this.addDive.value.waves);

    let current:string = this.addDive.get('current')?.value;
    this.addDive.value.current = current.toUpperCase();
    console.log(this.addDive.value.current);

    let suit:string = this.addDive.get('suit')?.value;
    suit = suit.replace(" ", "_");
    this.addDive.value.suit = suit.toUpperCase();
    console.log(this.addDive.value.suit);

    console.log(this.addDive.value.ballast);

    let tank:string = this.addDive.get('tank')?.value;
    this.addDive.value.tank = tank.toUpperCase();
    console.log(this.addDive.value.tank);

    let gasMix:string = this.addDive.get('gasMix')?.value;
    this.addDive.value.gasMix = gasMix.toUpperCase();
    console.log(this.addDive.value.gasMix);

    console.log(this.addDive.value.initialPressure);
    console.log(this.addDive.value.finalPressure);

    let judgement:string = this.addDive.get('judgement')?.value;
    judgement = judgement.replace(" ", "_");
    this.addDive.value.judgement = judgement.toUpperCase();
    console.log(this.addDive.value.judgement);

    console.log(this.addDive.value.notes);
    console.log(this.addDive.value.buddy);

    console.log(this.addDive.value);


    this.uSvc.addDive(this.addDive.value, this.user.id).subscribe(
      d => {
        console.log(d);
      }
    )
  }

}
