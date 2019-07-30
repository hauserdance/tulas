import { Component, ViewChild, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Tulas';
  myDate = Date.now();
  @ViewChild('f') signupForm: NgForm;
  
  
  hinnasto = {
    vs_11: 2,
    vs_10: 2,
    kotelo: 2,
    alakatto: 2,
    pistorasia: 2,
    tunti: 12
  }
  summa = 0;

  ngOnInit() {

  }

  onSubmit() {
    console.log(this.signupForm);
  
    //this.user.email = this.signupForm.value.email;
    //this.user.subscription = this.signupForm.value.subscription;
    //this.user.password = this.signupForm.value.password;

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
