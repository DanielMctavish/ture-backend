import IAdministrator from "./IAdministrators"
export default interface IMedicalConsultations {
    doctor_name: string
    doctor_id: string
    pacient_name: string
    pacient_id: string
    number_Chart: string
    exams_list: string[]
    attachments_url: string[]
}