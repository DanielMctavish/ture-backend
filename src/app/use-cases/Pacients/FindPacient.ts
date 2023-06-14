import PacientRepository from "../../repositories/PacientsRepository"
//import IPacients from "../../entities/IPacients"

interface ResponsePacient {
    status: number
    body: Object
}

export default class FindPacientAccount {
    constructor(private repository: PacientRepository) { }
    async handle(id: string): Promise<ResponsePacient> {
        try {

            if (!id) return { status: 500, body: { msg: 'no id passed' } }

            const currentPatient = await this.repository.getOne(id)

            return { status: 200, body: { currentPatient } }

        } catch (error: any) {
            return {
                status: 500,
                body: { msg: error.message }
            }
        }
    }
}