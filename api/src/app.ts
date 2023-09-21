import express from "express";
import UserRepository from "./repositories/user.repository";
import UserController from "./controllers/user.controller"

const userRepository = new UserRepository();
const app: express.Express = express();

app.use(express.json());

app.use('/api', UserController);

app.listen(3000, () => {
  console.log("Rodando rodando");
});
