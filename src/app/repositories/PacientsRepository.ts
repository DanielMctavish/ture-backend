import Pacient from '../entities/IPacients'

export default interface PacientRepository {
    create(data: Pacient): Promise<Pacient>
    update(pacient_id: string): Promise<Pacient>
    getOne(pacient_id: string): Promise<Pacient>
    getAll(administrator_id: string): Promise<Pacient[]>
}