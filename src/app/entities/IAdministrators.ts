import Pacients from './IPacients'

interface IAdministrator extends Pacients{
    position: PositionType
}

const PositionType: { [x: string]: 'DOCTOR' | 'SECRETARY' } = {
    DOCTOR: 'DOCTOR',
    SECRETARY: 'SECRETARY'
}

export type PositionType =
    typeof PositionType[keyof typeof PositionType]


export default IAdministrator;