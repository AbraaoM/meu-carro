import prisma from '../database/prismaClient'

export default class UserRepository {

  public async createUser(data: any) {
    const newUser = await prisma.user.create({
      data
    })
    console.log(newUser);
  }
}