import express from "express";
import UserController from "./controllers/user.controller";
import CarController from "./controllers/car.controller";
import ProcedureController from "./controllers/procedure.controller";
import cors from "cors";

const app: express.Express = express();

const corsOptions = {
  origin: ['http://localhost:4200'],
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(express.json());
app.use(cors(corsOptions));

app.use('/api', UserController);
app.use('/api', CarController);
app.use('/api', ProcedureController);

app.listen(3000, () => {
  console.log("Rodando rodando");
});
