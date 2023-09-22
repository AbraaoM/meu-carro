import express from "express";
import UserController from "./controllers/user.controller";
import CarController from "./controllers/car.controller";
import ProcedureController from "./controllers/procedure.controller";

const app: express.Express = express();

app.use(express.json());

app.use('/api', UserController);
app.use('/api', CarController);
app.use('/api', ProcedureController);

app.listen(3000, () => {
  console.log("Rodando rodando");
});
