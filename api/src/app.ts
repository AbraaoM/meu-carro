import express from "express";
import UserRepository from "./repositories/user.repository";

const userRepository = new UserRepository();
const app: express.Express = express();

app.get("/", (req: express.Request, res: express.Response) => {
  res.send("TESTE");
});

app.listen(3000, () => {
  userRepository.createUser({
    email: 'teste@teste.com',
    name: 'testador oficial',
  })
  console.log("Rodando rodando");
});
