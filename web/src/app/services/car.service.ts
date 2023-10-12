import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import CarModel from '../models/car.model';
@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private http: HttpClient) { }

  listCars(): Observable<CarModel[]>{
    return this.http.get<CarModel[]>('http://localhost:3000/api/car');
  }
  getCar(id: number): Observable<CarModel>{
    return this.http.get<CarModel>('http://localhost:3000/api/car/' + id);
  }
  createCar(newCar: CarModel): Observable<CarModel>{
    return this.http.post<CarModel>('http://localhost:3000/api/car/', newCar);
  }
  updateCar(newCar: CarModel): Observable<CarModel>{
    return this.http.put<CarModel>('http://localhost:3000/api/car/', newCar);
  }
  deleteCar(id: number): Observable<CarModel>{
    return this.http.delete<CarModel>('http://localhost:3000/api/car/' + id);
  }
}
