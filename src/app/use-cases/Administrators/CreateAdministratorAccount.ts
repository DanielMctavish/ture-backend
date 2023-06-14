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
            const currentAdministrator = this.repository.create(data)
            return { status: 200, body: { currentAdministrator} }
        } catch (error: any) {
            return { 
                status: 500, 
                body: { error } 
            }
        }
    }
}

export default CreateAdministratorAccount