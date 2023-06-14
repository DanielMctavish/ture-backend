import CreatePacientAccount from "./CreatePacientAccount";
import FindPacientAccount from "./FindPacient";
import ListPacientAccount from "./ListPacients";
import updatePacientAccount from "./UpdatePacient";

import PrismaPacientRepository from "../../repositories/implementations/PrismaPacientRepository";

export const createPacient = () => {
    const pacientRepository = new PrismaPacientRepository()
    return new CreatePacientAccount(pacientRepository)
}

export const findPacient = () => {
    const pacientRepository = new PrismaPacientRepository()
    return new FindPacientAccount(pacientRepository)
}

export const listPacient = async () => {
    const pacientRepository = await new PrismaPacientRepository()
    return new ListPacientAccount(pacientRepository)
}

export const updatePacient = async () => {
    const pacientRepository = new PrismaPacientRepository()
    return new updatePacientAccount(pacientRepository)
}

