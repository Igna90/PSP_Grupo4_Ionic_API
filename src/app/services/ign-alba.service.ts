import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IgnAlbaService {
  token:any;
  apiUrl = 'http://localhost:8000/api'
  constructor(private http : HttpClient) { }


  login(username,password){
    return new Promise(resolve => {
      this.http.post<any>(this.apiUrl + '/login/',
      {
        user: username,
        password: password,
      })
        .subscribe(data => {
          this.token = data;
          console.log(data);
          resolve(data)
        });
    });
  }

  getProjects(){
    return new Promise(resolve => {
      this.http.get(this.apiUrl + '/projects/',{
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.token)
      })
      .subscribe(data => {
        resolve(data)
      err => {
        console.log(err)
      }})
    })
  }
}
