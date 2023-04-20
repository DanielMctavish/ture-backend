import Administrator from '../entities/IAdministrators'

export default interface AdministratorRepository {
    create(data: Administrator): Promise<Administrator>
    update(Administrator_id: string): Promise<Administrator>
    getOne(Administrator_id: string): Promise<Administrator>
}