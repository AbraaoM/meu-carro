import prisma from "../database/prismaClient";
import { User as PrismaUser } from '@prisma/client';
import CreateUserModel from "../models/createUser.model";

export default class UserRepository {
  public async createUser(user: CreateUserModel): Promise<PrismaUser> {
    return await prisma.user.create({
      data: {
        name: user.name,
        email: user.email
      },
    });
  }

  public async getUsers (): Promise<PrismaUser[]> {
    return await prisma.user.findMany();
  }

  public async getUserById (id: number): Promise<PrismaUser | null> {
    return await prisma.user.findUnique({
      where: {
        id
      }
    });
  }

  public async updateUser(user: PrismaUser): Promise<PrismaUser> {
    return await prisma.user.update({
      where: {
        id: user.id,
      },
      data: user,
    });
  }

  public async deleteUser(id: number): Promise<PrismaUser> {
    return await prisma.user.delete({
      where: {
        id
      }
    })
  }
}
