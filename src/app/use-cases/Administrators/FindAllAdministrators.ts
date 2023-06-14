//ToDO - criar case criação de  administrador e implementar repositório FindAll
import repositoryAdministrator from '../../repositories/AdministratorRepository'
import IAdministrators from '../../entities/IAdministrators'

interface ResponseAdministrator {
    status: number
    body: Object
}

class CreateAdministratorAccount {
    constructor(private repository: repositoryAdministrator) { }
    async handle(data: IAdministrators): Promise<ResponseAdministrator> {
        try {
            const currentAdministrators = this.repository.getAll()
            return { status: 200, body: { currentAdministrators} }
        } catch (error: any) {
            return { 
                status: 500, 
                body: { error } 
            }
        }
    }
}

export default CreateAdministratorAccount