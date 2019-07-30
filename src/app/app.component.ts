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
  myDate = new Date(Date.now());
  @ViewChild('f') signupForm: NgForm;
  
  
  hinnasto = {
    vs_11: 2,
    vs_10: 2,
    kotelo: 2,
    alakatto: 2,
    pistorasia: 2,
    tunti: 12
  }
  user_id =1;
  summa = 0;

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    console.log(this.myDate);
  }

  onSubmit() {
    //console.log(this.signupForm);
    let workDay = {
      date: this.myDate,
      vs_11: this.signupForm.value.vs_11,
      vs_10: this.signupForm.value.vs_10,
      kotelo: this.signupForm.value.kotelo,
      alakatto: this.signupForm.value.alakatto,
      pistorasia: this.signupForm.value.pistorasia,
      tunti: this.signupForm.value.tunti
    }
    //console.log(workDay);
    this.httpService.newWordDay(this.user_id, this.myDate, workDay);
    
    //this.signupForm.reset();
  }

  updateSumma() {
    this.summa = this.signupForm.value.vs_11 * this.hinnasto.vs_11 +
                 this.signupForm.value.vs_10 * this.hinnasto.vs_10 +
                 this.signupForm.value.kotelo * this.hinnasto.kotelo +
                 this.signupForm.value.alakatto * this.hinnasto.alakatto +
                 this.signupForm.value.pistorasia * this.hinnasto.pistorasia + 
                 this.signupForm.value.tunti * this.hinnasto.tunti;
  }
  
}
