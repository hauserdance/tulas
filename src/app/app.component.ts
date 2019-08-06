import { Component, ViewChild, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { HttpService} from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Tulas';
  edit = false;
  myDate = new Date(Date.now());
  @ViewChild('f') signupForm: NgForm;
  
  hinnasto = {
    vs_11k600: 4,
    vs_11k400: 4.3,
    vs_11k300: 4.5,
    vs_01k600: 3.2,
    kylpary2l: 3.5,
    villa: 0.5,
    alakattoR_alle100: 0.4,
    alakattoR_yli100: 0.5,
    alakatto: 6,
    kotelo: 5,
    alakatto_ots: 3,
    seina_paady: 0.5,
    liukuovi_as: 11,
    jt: 2,
    pistorasia: 2,
    tunti: 12,
    kuvaus: ''
  }

  workDayObject = {
    date: new Date(),
    vs_11k600: '',
    vs_11k400: '',
    vs_11k300: '',
    vs_01k600: '',
    kylpary2l: '',
    villa: '',
    alakattoR_alle100: '',
    alakattoR_yli100: '',
    alakatto: '',
    kotelo: '',
    alakatto_ots: '',
    seina_paady: '',
    liukuovi_as: '',
    jt: '',
    pistorasia: '',
    tunti: '',
    kuvaus: ''
  }

  user_id = 1;
  summa = 0;

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    
  }

  onSubmit() {
    //console.log(this.signupForm);
      
    this.workDayObject.date = this.myDate;
    this.workDayObject.vs_11k600 = this.signupForm.value.vs_11k600;
    this.workDayObject.vs_11k400 = this.signupForm.value.vs_11k400;
    this.workDayObject.vs_11k300 = this.signupForm.value.vs_11k300;
    this.workDayObject.vs_01k600 = this.signupForm.value.vs_01k600;
    this.workDayObject.kylpary2l = this.signupForm.value.kylpary2l;
    this.workDayObject.villa = this.signupForm.value.villa;
    this.workDayObject.alakattoR_alle100 = this.signupForm.value.alakattoR_alle100;
    this.workDayObject.alakattoR_yli100 = this.signupForm.value.alakattoR_yli100;
    this.workDayObject.alakatto_ots = this.signupForm.value.alakatto_ots;
    this.workDayObject.kotelo = this.signupForm.value.kotelo;
    this.workDayObject.alakatto = this.signupForm.value.alakatto;
    this.workDayObject.seina_paady = this.signupForm.value.seina_paady;
    this.workDayObject.liukuovi_as = this.signupForm.value.liukuovi_as;
    this.workDayObject.jt = this.signupForm.value.jt;
    this.workDayObject.pistorasia = this.signupForm.value.pistorasia;
    this.workDayObject.tunti = this.signupForm.value.tunti;
    this.workDayObject.kuvaus = this.signupForm.value.kuvaus;

    this.httpService.saveDay(this.user_id, this.myDate, this.workDayObject, this.edit);
    //this.signupForm.reset();
  }

  updateSumma() {
    this.summa = this.signupForm.value.vs_11k600 * this.hinnasto.vs_11k600 +
                 this.signupForm.value.vs_11k400 * this.hinnasto.vs_11k400 +
                 this.signupForm.value.vs_11k300 * this.hinnasto.vs_11k300 +
                 this.signupForm.value.vs_01k600 * this.hinnasto.vs_01k600 +
                 this.signupForm.value.kylpary2l * this.hinnasto.kylpary2l +
                 this.signupForm.value.villa * this.hinnasto.villa +
                 this.signupForm.value.alakattoR_alle100 * this.hinnasto.alakattoR_alle100 +
                 this.signupForm.value.alakattoR_yli100 * this.hinnasto.alakattoR_yli100 +
                 this.signupForm.value.alakatto_ots * this.hinnasto.alakatto_ots +
                 this.signupForm.value.kotelo * this.hinnasto.kotelo +
                 this.signupForm.value.alakatto * this.hinnasto.alakatto +
                 this.signupForm.value.seina_paady * this.hinnasto.seina_paady +
                 this.signupForm.value.liukuovi_as * this.hinnasto.liukuovi_as +
                 this.signupForm.value.jt * this.hinnasto.jt +
                 this.signupForm.value.pistorasia * this.hinnasto.pistorasia + 
                 this.signupForm.value.tunti * this.hinnasto.tunti;
  }
  
}
