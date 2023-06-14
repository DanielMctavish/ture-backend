import PacientRepository from "../../repositories/PacientsRepository"
//import IPacients from "../../entities/IPacients"

interface ResponsePacient {
    status: number
    body: Object
}

export default class ListPacientAccount {
    constructor(private repository: PacientRepository) { }
    async handle(administrator_id: string): Promise<ResponsePacient> {
        try {

            if (!administrator_id) return { status: 500, body: { msg: 'no id passed' } }

            const listPatients = await this.repository.getAll(administrator_id)

            return { status: 200, body: { listPatients } }

        } catch (error: any) {
            return {
                status: 500,
                body: { msg: error.message }
            }
        }
    }
}