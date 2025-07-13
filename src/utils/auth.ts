import { Types } from 'mongoose';
import jwt from 'jsonwebtoken';
import { SignUserToken } from '@types';
import { ProcessEnv } from '../config';
import UserDao from '../dao/UserDao';
import { IUserDoc } from '@schemas';

export const SignToken = (user: SignUserToken): string => {
    const payload = {
        id: user.id,
        email: user.email,
        phone: user.phone,
    };

    return jwt.sign(payload, ProcessEnv.JWT_SECRET);
};

export const VerifyToken = async (
    token: string
): Promise<{
    success: boolean;
    user?: IUserDoc;
    error?: string;
}> => {
    try {
        const decoded = jwt.verify(token, ProcessEnv.JWT_SECRET) as SignUserToken;
        const user = await UserDao.getUserById({ user: new Types.ObjectId(decoded.id) });

        return {
            success: true,
            user: user ?? undefined,
        };
    } catch (error) {
        return { success: false, error: 'Invalid token' };
    }
};
