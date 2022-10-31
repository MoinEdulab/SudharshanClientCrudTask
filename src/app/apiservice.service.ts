import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { Observable } from 'rxjs';
'@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private _http: HttpClient) { }
  //conecting frontend to backend

  apiUrl = 'http://localhost:3000/user';

  // get all data
  getAllData(): Observable<any> {
    return this._http.get(`${this.apiUrl}`);
  }

  //create data
  createData(data: any): Observable<any> 
  {
    console.log(data, 'createapi==>')
    return this._http.post(`${this.apiUrl}`, data);

  }
  //delete data
  deleteData(id: any): Observable<any> 
  {
    let ids = id;
    return this._http.delete(`${this.apiUrl}/${ids}`);
  }

  // updata data
   
   updateData( data:any,id: any): Observable<any> 
   {
     let ids = id;
     return this._http.put(`${this.apiUrl}/${ids}`,data);
   }
//updatesingle data
getsingleData(id:any):Observable<any> 
{
  let ids=id;
  return this._http.get(`${this.apiUrl}/${ids}`);

}

}
