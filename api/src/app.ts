import express from "express";
import UserRepository from "./repositories/user.repository";
import UserController from "./controllers/user.controller";
import CarController from "./controllers/car.controller";

const app: express.Express = express();

app.use(express.json());

app.use('/api', UserController);
app.use('/api', CarController);

app.listen(3000, () => {
  console.log("Rodando rodando");
});
