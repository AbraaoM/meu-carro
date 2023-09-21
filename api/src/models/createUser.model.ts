import CarModel from "./car.model"

export default interface CreateUserModel {
  id: number;
  email: string;
  name?: string;
  cars: CarModel[];
}