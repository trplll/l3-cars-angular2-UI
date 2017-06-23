import { Component } from '@angular/core';
import { CarService } from './car.service';
import{Car} from './car';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
      providers: [CarService]
})
export class AppComponent implements OnInit {
  title = 'Car Specifications';
  cars: Car[];
selectedCar:Car;

  constructor(private carService:CarService) { }

 getCars(): void {
    this.carService.getCars().then(cars => this.cars = cars);
  }

  ngOnInit(): void {
    this.getCars();
  }

  onSelect(car: Car): void {
    this.selectedCar = car;
  }
}
