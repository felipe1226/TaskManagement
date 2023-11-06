import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

    userId!: string;

  constructor(private http: HttpClient) { }

  setUserId(id: string){
    this.userId = id;
  }

  getUserId(){
    return this.userId;
  }

  getUserData(): Observable<any> {
    let id = '0621F808-B871-44EC-B8ED-895A3F13F26F';
    const params = new HttpParams({ fromObject: {id} })
    return this.http.get<any>(`${environment.api}/user/get`, {params})
  }
  
}