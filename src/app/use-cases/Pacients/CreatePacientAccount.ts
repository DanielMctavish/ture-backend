import PacientRepository from "../../repositories/PacientsRepository"
import IPacients from "../../entities/IPacients"

interface ResponsePacient {
    status: number
    body: Object
}

export default class CreatePacientAccount {
    constructor(private repository: PacientRepository) { }
    async handle(data: IPacients): Promise<ResponsePacient> {
        try {

            if (!data) return { status: 500, body: { msg: 'no data found' } }

            const currentPatient = await this.repository.create(data)

            return { status: 200, body: { currentPatient } }

        } catch (error: any) {
            return {
                status: 500,
                body: { msg: error.message }
            }
        }
    }
}