import { Request, Response } from 'express';
import Razorpay from 'razorpay';
import { Currency, PaymentStatus } from '@enums';
import { ProcessEnv } from '../../config';
import PaymentDao from '../../dao/PaymentDao';

const razorpay = new Razorpay({
    key_id: ProcessEnv.RAZORPAY_KEY_ID,
    key_secret: ProcessEnv.RAZORPAY_KEY_SECRET,
});

class PaymentService {
    async create(req: Request, res: Response) {
        const user = req.user;

        const { amount, name, email, contact } = req.body;

        const paymentLink = await razorpay.paymentLink.create({
            amount: amount * 100,
            currency: Currency.INR,
            customer: { name, email, contact },
            notify: { sms: true, email: true },
            reference_id: `pay_${Date}`,
        });

        await PaymentDao.create({
            userId: user._id,
            amount,
            currency: Currency.INR,
            razorpayLinkId: paymentLink.id,
            razorpayLinkReferenceId: paymentLink.reference_id,
            paymentStatus: PaymentStatus.CREATED,
            customerDetails: { name, email, contact },
        });

        return res.success(paymentLink, 'Payment link created');
    }
}

export default new PaymentService();
