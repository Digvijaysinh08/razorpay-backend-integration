import { Currency, PaymentStatus } from '@enums';
import { TypesObjectId } from '@schemas';
import { Document, Model } from 'mongoose';

export interface IPayment {
    userId: TypesObjectId;
    amount: number;
    currency: Currency;
    razorpayLinkId: string;
    razorpayLinkReferenceId?: string;
    paymentStatus: PaymentStatus;
    customerDetails?: {
        name?: string;
        email?: string;
        contact?: string;
    };
}

export interface IPaymentDocs extends IPayment, Document {
    _id: TypesObjectId;
    createdAt: Date;
    updatedAt: Date;
}

export type IPaymentModel = Model<IPaymentDocs>;
