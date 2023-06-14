import PacientRepository from "../../repositories/PacientsRepository"
import IPacients from "../../entities/IPacients"

interface ResponsePacient {
    status: number
    body: Object
}

export default class updatePacientAccount {
    constructor(private repository: PacientRepository) { }
    async handle(id: string, data: IPacients): Promise<ResponsePacient> {
        try {

            if (!id || !data) return { status: 500, body: { msg: 'no id or data to passed' } }

            const listPatients = await this.repository.update(id, data)

            return { status: 200, body: { listPatients } }

        } catch (error: any) {
            return {
                status: 500,
                body: { msg: error.message }
            }
        }
    }
}