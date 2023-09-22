import express from "express";
import ProcedureRepository from "../repositories/procedure.repository";
import CreateProcedureModel from "../models/createProcedure.model";
import { Procedure as PrismaProcedure } from '@prisma/client';

const router = express.Router();
const procedureRepository = new ProcedureRepository();

router.post("/procedure", async (req: express.Request<any, any, CreateProcedureModel>, resp: express.Response) => {
  try {
    const newProcedure = await procedureRepository.createProcedure(req.body);
    resp.status(201).json(newProcedure);
  } catch (error) {
    console.error("Erro ao criar procedimento:", error);
    resp.status(500).json({ message: "Erro ao criar procedimento" });
  }
});

router.get("/procedure", async (req: express.Request, resp: express.Response) => {
  try {
    const procedures = await procedureRepository.getProcedures();
    resp.status(201).json(procedures);
  } catch (error) {
    console.error("Erro ao criar procedimento:", error);
    resp.status(500).json({ message: "Erro ao listas procedimentos" });
  }
});

router.get("/procedure/:id", async (req: express.Request<{id: string}>, resp: express.Response) => {
  try {
    const procedures = await procedureRepository.getProcedureById(Number(req.params.id));
    resp.status(201).json(procedures);
  } catch (error) {
    console.error("Erro ao criar procedimento:", error);
    resp.status(500).json({ message: "Erro ao buscar procedimento" });
  }
});

router.put("/procedure", async (req: express.Request<any, any, PrismaProcedure>, resp: express.Response) => {
  try {
    const procedure = await procedureRepository.updateProcedure(req.body);
    resp.status(201).json(procedure);
  } catch (error) {
    console.error("Erro ao criar procedimento:", error);
    resp.status(500).json({ message: "Erro ao atualizar procedimentos" });
  }
});

router.delete("/procedure/:id", async (req: express.Request<{id: string}>, resp: express.Response) => {
  try {
    const procedure = await procedureRepository.deleteProcedure(Number(req.params.id));
    resp.status(201).json(procedure);
  } catch (error) {
    console.error("Erro ao criar procedimento:", error);
    resp.status(500).json({ message: "Erro ao deletar procedimentos" });
  }
});

export default router;
