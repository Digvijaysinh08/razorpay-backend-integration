import { Request, Response } from 'express';
import { IUser, Pagination } from '@schemas';
import { GetUsers } from '@types';
import UserDao from '../../dao/UserDao';

class UserService {
    async create(req: Request, res: Response) {
        const user = req.body;

        const data: IUser = { ...user };

        if (!user) return res.badRequest(null, 'User data is required');

        const userData = await UserDao.create(data);

        return res.success(userData, 'User created successfully');
    }

    async getAll(req: Request, res: Response) {
        const user = req.user;
        const { search, page, perPage, sort } = req.query as unknown as GetUsers & Pagination;

        const [count, users] = await Promise.all([
            UserDao.countAll({
                search,
                id: user._id,
            }),
            UserDao.getAll({
                page,
                perPage,
                search,
                id: user._id,
                sort,
            }),
        ]);

        return res.success(
            {
                count,
                users,
            },
            'Users fetched successfully'
        );
    }
}

export default new UserService();
