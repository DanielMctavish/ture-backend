import MedicalConsult from '../entities/IMedicalConsultations'

export default interface ConsultRepository {
    create(data: MedicalConsult): Promise<MedicalConsult>
    update(consult_id: string): Promise<MedicalConsult>
    getOne(consult_id: string): Promise<MedicalConsult>
    getAll(administrator_id: string): Promise<MedicalConsult[]>
}