import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { API } from 'src/API';

@Injectable({
  providedIn: 'root'
})
export class HttpService extends API {

  headers: HttpHeaders;
  url = 'students';

  constructor(httpClient: HttpClient) { 
    super (httpClient);
    this.headers = new HttpHeaders();
    this.headers.set ('Content-type', 'application/json');
  }

  async getStudents(){
    return this.get( `${this.url}`, this.headers ).toPromise();
  }

  async postStudent( data ){
    return this.post( `${this.url}`, data, this.headers ).toPromise();
  }
  
  async putStudent( data, id ){
    return this.put( `${this.url}/${id}`, data, this.headers ).toPromise();
  }

  async getStudentById( id ){
    return this.get( `${this.url}/${id}`, this.headers ).toPromise();
  }

  async deleteStudent( id ){
    return this.delete( `${this.url}/${id}`, this.headers ).toPromise();
  }



}
