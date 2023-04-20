import IAccessToken from "../entities/IAccessToken"

export default interface AccessTokenRepository {
    create(data: IAccessToken): Promise<IAccessToken | null>
    findOne(token: string): Promise<IAccessToken | null>
    deleteByToken(token: string): Promise<IAccessToken | null>
    deleteAll(user_id: string): Promise<IAccessToken[] | null>
}