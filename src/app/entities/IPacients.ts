interface IPacients {
    full_name: string
    email: string
    document_type: DocumentType
    document_number: string
    date_birth: string
    address: string
    profile_picture_url: string
    document_picture_url: string
    password: string
}


const DocumentType: { [x: string]: 'RG' | 'CPF' } = {
    RG: 'RG',
    CPF: 'CPF'
}

export type DocumentType =
    typeof DocumentType[keyof typeof DocumentType]


export default IPacients