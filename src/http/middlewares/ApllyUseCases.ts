
interface requestUsecases {
    id?: string
    data?: Object
}

export const ApplyUseCase = (usecase: Function, data: requestUsecases) => {
    usecase().handle(data)
}