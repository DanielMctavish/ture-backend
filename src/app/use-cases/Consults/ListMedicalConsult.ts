import ConsultsRepository from "../../repositories/ConsultsRepository"
//import IMedicalConsultations from "../../entities/IMedicalConsultations"

interface ResponsePacient {
    status: number
    body: Object
}

export default class CreateMedicalConsult {
    constructor(private repository: ConsultsRepository) { }
    async handle(administrator_id: string): Promise<ResponsePacient> {
        try {

            if (!administrator_id) return { status: 500, body: { msg: 'no data found' } }

            const currentConsult = await this.repository.getAll(administrator_id)

            return { status: 200, body: { currentConsult } }

        } catch (error: any) {
            return {
                status: 500,
                body: { msg: error.message }
            }
        }
    }
}