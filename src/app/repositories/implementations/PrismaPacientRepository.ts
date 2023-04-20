import IPacients from '../../entities/IPacients'
import PacientsRepository from '../PacientsRepository'
import prisma from '../../../core/database/prisma'

class PrismaPacientRepository implements PacientsRepository {
    async create(data: IPacients): Promise<IPacients | null> {
        if (!data) return null
        return await prisma.pacients.create({
            data
        })
    }
    async getAll(administrator_id: string): Promise<IPacients[]> {
        return await prisma.pacients.findMany({
            where:{
                administratorId:administrator_id
            }
        })
    }
    async getOne(pacient_id: string): Promise<IPacients | null> {
        if(!pacient_id) return null
        return await prisma.pacients.findFirst({
            where:{
                id:pacient_id
            }
        })
    }
    async update(id: string, data: IPacients): Promise<IPacients> {
        return await prisma.pacients.update({
            where:{
                id
            },
            data
        })
    }
}

export default PrismaPacientRepository;