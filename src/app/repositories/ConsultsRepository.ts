import MedicalConsult from '../entities/IMedicalConsultations'

export default interface ConsultRepository {
    create(data: MedicalConsult): Promise<MedicalConsult | null>
    update(consult_id: string, data: MedicalConsult): Promise<MedicalConsult>
    getOne(consult_id: string): Promise<MedicalConsult | null>
    getAll(administrator_id: string): Promise<MedicalConsult[]>
    deleteOne(consult_id: string): Promise<MedicalConsult | null>
}