import UserModel from "./createUser.model";
import ProcedureModel from "./procedure.model"

export default interface CarModel {
  id: number;
  name: string;
  licensePlate: string;
  user: UserModel;
  userId: number;
  procedures: ProcedureModel[];
}