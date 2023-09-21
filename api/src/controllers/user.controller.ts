import express from "express";
import UserRepository from "../repositories/user.repository";
import CreateUserModel from "../models/createUser.model";
import { User as PrismaUser } from '@prisma/client';

const router = express.Router();
const userRepository = new UserRepository();

router.post("/user", async (req: express.Request<any, any, CreateUserModel>, resp: express.Response) => {
  try {
    const newUser = await userRepository.createUser(req.body);
    resp.status(201).json(newUser);
  } catch (error) {
    console.error("Erro ao criar usuário:", error);
    resp.status(500).json({ message: "Erro ao criar usuário" });
  }
});

router.get("/user", async (req: express.Request, resp: express.Response) => {
  try {
    const users = await userRepository.getUsers();
    resp.status(201).json(users);
  } catch (error) {
    console.error("Erro ao criar usuário:", error);
    resp.status(500).json({ message: "Erro ao criar usuário" });
  }
});

router.get("/user/:id", async (req: express.Request<{id: string}>, resp: express.Response) => {
  try {
    const users = await userRepository.getUserById(Number(req.params.id));
    resp.status(201).json(users);
  } catch (error) {
    console.error("Erro ao criar usuário:", error);
    resp.status(500).json({ message: "Erro ao criar usuário" });
  }
});

router.put("/user", async (req: express.Request<any, any, PrismaUser>, resp: express.Response) => {
  try {
    const user = await userRepository.updateUser(req.body);
    resp.status(201).json(user);
  } catch (error) {
    console.error("Erro ao criar usuário:", error);
    resp.status(500).json({ message: "Erro ao criar usuário" });
  }
});

router.delete("/user/:id", async (req: express.Request<{id: string}>, resp: express.Response) => {
  try {
    const user = await userRepository.deleteUser(Number(req.params.id));
    resp.status(201).json(user);
  } catch (error) {
    console.error("Erro ao criar usuário:", error);
    resp.status(500).json({ message: "Erro ao criar usuário" });
  }
});

export default router;
