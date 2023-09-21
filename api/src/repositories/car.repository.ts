import prisma from "../database/prismaClient";
import { Car as PrismaCar } from '@prisma/client';
import CreateCarModel from "../models/createCar.model";

export default class CarRepository {
  public async createCar(car: CreateCarModel): Promise<PrismaCar | null> {
   let user = prisma.user.findUnique({
      where: {
        id: car.userId
      }
    });

    if (!user) {
      throw new Error("Usuário não encontrado");
    }

    return await prisma.car.create({
      data: {
        name: car.name,
        licensePlate: car.licensePlate,
        userId: car.userId
      },
    });
  }

  public async getCars (): Promise<PrismaCar[]> {
    return await prisma.car.findMany();
  }

  public async getCarById (id: number): Promise<PrismaCar | null> {
    return await prisma.car.findUnique({
      where: {
        id
      }
    });
  }

  public async updateCar(car: PrismaCar): Promise<PrismaCar> {
    return await prisma.car.update({
      where: {
        id: car.id,
      },
      data: car,
    });
  }

  public async deleteCar(id: number): Promise<PrismaCar> {
    return await prisma.car.delete({
      where: {
        id
      }
    })
  }
}
