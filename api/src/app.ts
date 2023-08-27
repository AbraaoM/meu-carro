import express from "express";

const app: express.Express = express();

app.get("/", (req: express.Request, res: express.Response) => {
  res.send("TESTE");
});

app.listen(3000, () => {
  console.log("Rodando rodando");
});
