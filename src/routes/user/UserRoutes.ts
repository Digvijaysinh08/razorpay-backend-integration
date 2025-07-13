import { RequestHandler, Router } from 'express';
import UserService from './UserService';
import UserValidation from './UserValidation';
import { validate } from '../../utils';
import { verifyToken } from '../../middlewares';

const router = Router();

router.post('/', validate(UserValidation.create, 'body'), UserService.create as unknown as RequestHandler);

router.get('/', verifyToken, UserService.getAll as unknown as RequestHandler);

export { router };
