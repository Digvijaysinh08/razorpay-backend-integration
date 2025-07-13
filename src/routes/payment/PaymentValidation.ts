import { commonValidations, joi } from '../../utils';

const requiredId = joi.object().keys({
    id: commonValidations.id,
});

const create = joi.object().keys({
    amount: joi.number().positive().required(),
    name: joi.string().trim().min(3).max(30).required(),
    email: commonValidations.email,
    contact: commonValidations.phone,
});

const getAll = joi.object().keys({
    page: commonValidations.page,
    perPage: commonValidations.perPage,
});

export default {
    requiredId,
    create,
    getAll,
};
