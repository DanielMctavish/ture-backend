import IAdministrator from '../../entities/IAdministrators'
import AdministratorRepository from '../AdministratorRepository'
import prisma from '../../../core/database/prisma'

export class PrismaAdministratorRepository implements AdministratorRepository {
    async create(data: IAdministrator): Promise<IAdministrator | null> {
        if (!data) return null

        return await prisma.administrators.create({
            data
        })
    }
    async update(Administrator_id: string, data: IAdministrator): Promise<IAdministrator> {
        return await prisma.administrators.update({
            where: {
                id: Administrator_id
            },
            data
        })
    }
    async getOne(id: string): Promise<IAdministrator | null> {
        if (!id) return null
        return await prisma.administrators.findFirst({
            where: {
                id
            }
        })
    }
    async getAll(): Promise<IAdministrator[]> {
        return await prisma.administrators.findMany()
    }
}