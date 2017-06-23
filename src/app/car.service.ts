import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Car } from './car';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class CarService {
private productsUrl = 'http://208.113.128.118:8000/api/cars/';  // URL to web api
constructor(private http: Http) { }
getCars(): Promise<Car[]> {
  return this.http.get(this.productsUrl)
             .toPromise()
             .then(response => response.json() as Car[])
             .catch(this.handleError);
}


private handleError(error: any): Promise<any> {
  console.error('An error occurred', error); // for demo purposes only
  return Promise.reject(error.message || error);
}
}
