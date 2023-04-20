import prisma from '../../../core/database/prisma'
import ConsultsRepository from '../ConsultsRepository'
import IMedicalConsultations from '../../entities/IMedicalConsultations'

export default class PrismaConsultsRepository implements ConsultsRepository{
    async create(data: IMedicalConsultations): Promise<IMedicalConsultations | null> {
        if(!data) return null
        return await prisma.medicalConsultations.create({
            data
        })
    }
    async update(consult_id: string, data: IMedicalConsultations): Promise<IMedicalConsultations> {
        return await prisma.medicalConsultations.update({
            where:{
                id:consult_id
            },
            data
        })
    }
    async getOne(consult_id: string): Promise<IMedicalConsultations | null> {
        if(!consult_id) return null
        return await prisma.medicalConsultations.findFirst({
            where:{id:consult_id}
        })
    }
    async getAll(administrator_id: string): Promise<IMedicalConsultations[]> {
        return await prisma.medicalConsultations.findMany({
            where:{
                administratorsId:administrator_id
            }
        })
    }
}