import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor ( private uSvc:UserService, private route:ActivatedRoute, private dPipe:DatePipe, private router:Router ) { }

  // props
  username!: string;
  user!: any; //weird typing but is the only one that works
  maxDate: Date = new Date();
  error: string | undefined
  addDive!: FormGroup;

  diveType: string[] = ['Boat', 'Jetty', 'Shore'];
  waterType: string[] = ['River', 'Lake', 'Ocean', 'Cave', 'Ice', 'Other'];
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

    // retrieve data from localstorage
    let item: iUser | null | string = localStorage.getItem('user');
    if(item){
      item = JSON.parse(item);
      this.user = item;
    }

    this.addDive = new FormGroup({
      name: new FormControl(null,
        [
          Validators.required,
          Validators.minLength(3)
        ]
        ),
      date: new FormControl(null, Validators.required),
      type: new FormControl('BOAT', Validators.required),
      maxDepth: new FormControl(null,
        [
          Validators.max(300),
          Validators.min(0)
        ]
        ),
      diveTime: new FormControl(null,
        [
          Validators.max(360),
          Validators.min(1)
        ]
        ),
      waterType: new FormControl('OCEAN', Validators.required),
      waterTaste: new FormControl('SALTY_WATER', Validators.required),
      weather: new FormControl('SUNNY', Validators.required),
      airTemperature: new FormControl(null,
        [
          Validators.required,
          Validators.min(-100),
          Validators.max(100)
        ]
        ),
      surfaceTemperature: new FormControl(null,
        [
          Validators.required,
          Validators.min(-100),
          Validators.max(100)
        ]
        ),
      deepTemperature: new FormControl(null,
        [
          Validators.required,
          Validators.min(-100),
          Validators.max(100)
        ]
        ),
      visibility: new FormControl('EXCELLENT', Validators.required),
      waves: new FormControl('NONE', Validators.required),
      current: new FormControl('NONE', Validators.required),
      suit: new FormControl('NONE', Validators.required),
      ballast: new FormControl(null,
        [
          Validators.required,
          Validators.min(0),
          Validators.max(100)
        ]
        ),
      tank: new FormControl('OTHER', Validators.required),
      tankSize: new FormControl(null,
        [
          Validators.required,
          Validators.min(0),
          Validators.max(100)
        ]
        ), //ok
      gasMix: new FormControl('AIR', Validators.required),
      initialPressure: new FormControl(null,
        [
          Validators.required,
          Validators.min(0),
          Validators.max(300)
        ]
        ),
      finalPressure: new FormControl(null,
        [
          Validators.required,
          Validators.min(0),
          Validators.max(300)
        ]
        ),
      usedAir: new FormControl(null),
      judgement: new FormControl('EXCELLENT', Validators.required),
      notes: new FormControl(null),
      buddy: new FormControl(null),
    });
  }

  addDiveSession(){

    if(
      // tons of checks
      this.addDive.value.name &&
      this.addDive.value.date &&
      this.addDive.value.date < this.maxDate &&
      this.addDive.value.type &&
      this.addDive.value.maxDepth &&
      this.addDive.value.diveTime &&
      this.addDive.value.waterType &&
      this.addDive.value.waterTaste &&
      this.addDive.value.weather&&
      this.addDive.value.airTemperature &&
      this.addDive.value.surfaceTemperature &&
      this.addDive.value.deepTemperature &&
      this.addDive.value.visibility &&
      this.addDive.value.waves &&
      this.addDive.value.current &&
      this.addDive.value.suit &&
      this.addDive.value.ballast &&
      this.addDive.value.tank &&
      this.addDive.value.tankSize &&
      this.addDive.value.gasMix &&
      this.addDive.value.initialPressure &&
      this.addDive.value.finalPressure &&
      this.addDive.value.judgement
    ) { this.addDive.value.date = this.dPipe.transform(this.addDive.value.date, 'yyyy-MM-dd');
     // Capitalize type, waterType, and other relevant fields
    let value:string = this.addDive.get('type')?.value;
    this.addDive.value.type = value.toUpperCase();

    let waterType:string = this.addDive.get('waterType')?.value;
    this.addDive.value.waterType = waterType.toUpperCase();

    let waterTaste:string = this.addDive.get('waterTaste')?.value;
    waterTaste = waterTaste.replace(" ", "_");
    this.addDive.value.waterTaste = waterTaste.toUpperCase();

    let weather:string = this.addDive.get('weather')?.value;
    weather = weather.replace(" ", "_");
    this.addDive.value.weather = weather.toUpperCase();;

    let visibility:string = this.addDive.get('visibility')?.value;
    this.addDive.value.visibility = visibility.toUpperCase();

    let waves:string = this.addDive.get('waves')?.value;
    this.addDive.value.waves = waves.toUpperCase();

    let current:string = this.addDive.get('current')?.value;
    this.addDive.value.current = current.toUpperCase();

    let suit:string = this.addDive.get('suit')?.value;
    suit = suit.replace(" ", "_");
    this.addDive.value.suit = suit.toUpperCase();

    let tank:string = this.addDive.get('tank')?.value;
    this.addDive.value.tank = tank.toUpperCase();

    let gasMix:string = this.addDive.get('gasMix')?.value;
    this.addDive.value.gasMix = gasMix.toUpperCase();

    let judgement:string = this.addDive.get('judgement')?.value;
    judgement = judgement.replace(" ", "_");
    this.addDive.value.judgement = judgement.toUpperCase();

    // send data to the server (needs the user id)
    this.uSvc.addDive(this.addDive.value, this.user.id).subscribe(
      d => {
        console.log(d);
        this.addDive.reset();
        this.router.navigate(['profile/' + this.user.username])
      },

      (error) => {
        console.error('Error while adding dive:', error);
        this.error = error
      }
    )
    }
    else{
      this.error = 'Something went wrong. Please make shure you have filled all the inputs'
    }


  }

}
