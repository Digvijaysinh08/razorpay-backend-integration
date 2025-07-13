import { mongoose, Payment } from '@models';
import { IPayment, IPaymentDocs, Pagination } from '@schemas';

type FilterQueryIPayment = mongoose.FilterQuery<IPayment>;

class PaymentDao {
    async create(payment: IPayment): Promise<IPaymentDocs> {
        return Payment.create(payment);
    }
}

export default new PaymentDao();
