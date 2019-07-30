import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class HttpService{
    constructor(private http: HttpClient){ }

    newWordDay(userId, userDay, workDay) {
        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              'Authorization': 'my-auth-token'
            })
          };
    
            console.log("Service: ", workDay);
        return this.http.post("http://tulas.myspt.ru/api/admin/user/1/work", workDay, httpOptions)
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
    }

    updateDay(userId, userDay, workDay) {
        //this.http.put("http://tulas.myspt.ru/api/admin/user/1/work/1", workDay, httpOptions);
    }



  /*    
    getWordFromDB(word: string) {
        
        this.http.get('http://a0182619.xsph.ru/api/admin/word/' + word).subscribe(
            (res:Word[]) => {
                this.data=res;
                console.log(this.data[0].russian);
                return this.data;
            }
        );
        return this.http.get('http://a0182619.xsph.ru/api/admin/word/' + word);
    }
  */


}