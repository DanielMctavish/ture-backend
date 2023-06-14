import ConsultsRepository from "../../repositories/ConsultsRepository"
//import IMedicalConsultations from "../../entities/IMedicalConsultations"

interface ResponsePacient {
    status: number
    body: Object
}

export default class CreateMedicalConsult {
    constructor(private repository: ConsultsRepository) { }
    async handle(id: string): Promise<ResponsePacient> {
        try {

            if (!id) return { status: 500, body: { msg: 'no data found' } }

            const currentConsult = await this.repository.getOne(id)

            return { status: 200, body: { currentConsult } }

        } catch (error: any) {
            return {
                status: 500,
                body: { msg: error.message }
            }
        }
    }
}