import CarModel from "./createCar.model";

export default interface Procedure {
  id: number;
  title: string;
  car: CarModel;
  carId: number;
}