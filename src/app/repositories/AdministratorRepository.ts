import Administrator from '../entities/IAdministrators'
export default interface AdministratorRepository {
    create(data: Administrator): Promise<Administrator | null>
    update(Administrator_id: string, data: Administrator): Promise<Administrator>
    getOne(id: string): Promise<Administrator | null>
}