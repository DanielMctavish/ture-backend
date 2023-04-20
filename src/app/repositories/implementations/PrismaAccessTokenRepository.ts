import prisma from "../../../core/database/prisma";
import IAccessToken from "../../entities/IAccessToken";
import AccessTokenRepository from '../AccessTokenRepository'

class PrismaAccessTokenRepository implements AccessTokenRepository {
    async create(data: IAccessToken): Promise<IAccessToken | null> {
        if (!data) return null
        return await prisma.accessToken.create({
            data
        })
    }
    async findOne(token: string): Promise<IAccessToken | null> {
        if (!token) return null
        return await prisma.accessToken.findFirst({
            where: {
                token
            }
        })
    }
    async deleteByToken(token: string): Promise<IAccessToken | null> {
        if (!token) return null
        return await prisma.accessToken.delete({
            where: {
                token
            }
        })
    }
    async deleteAll(user_id: string): Promise<IAccessToken[] | any> {
        return await prisma.accessToken.deleteMany({
            where: {
                user_id
            }
        })
    }
}

export default PrismaAccessTokenRepository;