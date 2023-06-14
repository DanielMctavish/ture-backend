import ConsultsRepository from "../../repositories/ConsultsRepository"
import IMedicalConsultations from "../../entities/IMedicalConsultations"

interface ResponsePacient {
    status: number
    body: Object
}

export default class CreateMedicalConsult {
    constructor(private repository: ConsultsRepository) { }
    async handle(data: IMedicalConsultations): Promise<ResponsePacient> {
        try {

            if (!data) return { status: 500, body: { msg: 'no data found' } }

            const currentConsult = await this.repository.create(data)

            return { status: 200, body: { currentConsult } }

        } catch (error: any) {
            return {
                status: 500,
                body: { msg: error.message }
            }
        }
    }
}