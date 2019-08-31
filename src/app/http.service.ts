import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class HttpService{

  constructor(private http: HttpClient){ }

  saveDay(userId, userDate, workDayObject, edit) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'my-auth-token'
      })
    };
     
    if (edit) {
      /*
      return this.http.put("http://tulas.myspt.ru/api/admin/user/1/work", workDayObject, httpOptions)
      .subscribe(
          (val) => {
              console.log("POST call successful value returned in body", 
                        val);
          },
          response => {
            console.log("POST call in error", response);
          },
          () => {
            console.log("The POST observable is now completed.");
          });
          */
    } else {
        return this.http.post("http://tulas.myspt.ru/api/admin/user/1/work", workDayObject, httpOptions)
                    .subscribe(
                        (val) => {
                            console.log("POST call successful value returned in body", val);
                        },
                        response => {
                          console.log("POST call in error", response);
                        },
                        () => {
                          console.log("The POST observable is now completed.");
                        });
      }
  }

}