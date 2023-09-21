import express from "express";
import CarRepository from "../repositories/car.repository";
import CreateCarModel from "../models/createCar.model";
import { Car as PrismaCar } from '@prisma/client';

const router = express.Router();
const carRepository = new CarRepository();

router.post("/car", async (req: express.Request<any, any, CreateCarModel>, resp: express.Response) => {
  try {
    const newCar = await carRepository.createCar(req.body);
    resp.status(201).json(newCar);
  } catch (error) {
    console.error("Erro ao criar usuário:", error);
    resp.status(500).json({ message: "Erro ao criar carro" });
  }
});

router.get("/car", async (req: express.Request, resp: express.Response) => {
  try {
    const cars = await carRepository.getCars();
    resp.status(201).json(cars);
  } catch (error) {
    console.error("Erro ao criar usuário:", error);
    resp.status(500).json({ message: "Erro ao listar carros" });
  }
});

router.get("/car/:id", async (req: express.Request<{id: string}>, resp: express.Response) => {
  try {
    const cars = await carRepository.getCarById(Number(req.params.id));
    resp.status(201).json(cars);
  } catch (error) {
    console.error("Erro ao criar usuário:", error);
    resp.status(500).json({ message: "Erro ao buscar carro" });
  }
});

router.put("/car", async (req: express.Request<any, any, PrismaCar>, resp: express.Response) => {
  try {
    const car = await carRepository.updateCar(req.body);
    resp.status(201).json(car);
  } catch (error) {
    console.error("Erro ao criar usuário:", error);
    resp.status(500).json({ message: "Erro ao atualizar carro" });
  }
});

router.delete("/car/:id", async (req: express.Request<{id: string}>, resp: express.Response) => {
  try {
    const car = await carRepository.deleteCar(Number(req.params.id));
    resp.status(201).json(car);
  } catch (error) {
    console.error("Erro ao criar usuário:", error);
    resp.status(500).json({ message: "Erro ao deletar carro" });
  }
});

export default router;
