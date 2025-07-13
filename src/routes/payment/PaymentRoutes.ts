import { RequestHandler, Router } from 'express';
import PaymentService from './PaymentService';
import PaymentValidation from './PaymentValidation';
import { validate } from '../../utils';
import { verifyToken } from '../../middlewares';

const router = Router();

router.post('/', verifyToken, validate(PaymentValidation.create, 'body'), PaymentService.create as RequestHandler);

export { router };
