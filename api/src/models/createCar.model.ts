import UserModel from "./createUser.model";
import ProcedureModel from "./procedure.model"

export default interface CreateCarModel {
  name: string;
  licensePlate: string;
  userId: number;
}