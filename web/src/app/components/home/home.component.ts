import CarModel from 'src/app/models/car.model';
import { CarService } from './../../services/car.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  public carList: CarModel[] = [];

  constructor(private carService: CarService){}

  ngOnInit(): void {
    this.carService.listCars().subscribe({
      next: (res) => {
        this.carList = res;
      }
    })
  }


}
