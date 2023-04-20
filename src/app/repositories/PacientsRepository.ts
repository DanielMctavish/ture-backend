import Pacient from '../entities/IPacients'

export default interface PacientRepository {
    create(data: Pacient): Promise<Pacient| null>
    update(pacient_id: string, data: Pacient): Promise<Pacient>
    getOne(pacient_id: string): Promise<Pacient| null>
    getAll(administrator_id: string): Promise<Pacient[]>
}