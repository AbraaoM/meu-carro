import CarModel from "./car.model";

export default interface Procedure {
  id: number;
  title: string;
  car: CarModel;
  carId: number;
}