import prisma from "../database/prismaClient";
import { Procedure as PrismaProcedure } from '@prisma/client';
import CreateProcedureModel from "../models/createProcedure.model";

export default class ProcedureRepository {
  public async createProcedure(procedure: CreateProcedureModel): Promise<PrismaProcedure | null> {
   let car = prisma.car.findUnique({
      where: {
        id: procedure.carId
      }
    });

    if (!car) {
      throw new Error("Carro não encontrado");
    }

    return await prisma.procedure.create({
      data: {
        title: procedure.title,
        carId: procedure.carId
      },
    });
  }

  public async getProcedures (): Promise<PrismaProcedure[]> {
    return await prisma.procedure.findMany();
  }

  public async getProcedureById (id: number): Promise<PrismaProcedure | null> {
    return await prisma.procedure.findUnique({
      where: {
        id
      }
    });
  }

  public async updateProcedure(procedure: PrismaProcedure): Promise<PrismaProcedure> {
    return await prisma.procedure.update({
      where: {
        id: procedure.id,
      },
      data: procedure,
    });
  }

  public async deleteProcedure(id: number): Promise<PrismaProcedure> {
    return await prisma.procedure.delete({
      where: {
        id
      }
    })
  }
}
