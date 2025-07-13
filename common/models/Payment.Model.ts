import { Currency, PaymentStatus } from '@enums';
import { IPaymentDocs, IPaymentModel, ObjectId } from '@schemas';
import { model, Schema } from 'mongoose';

const PaymentSchema = new Schema<IPaymentDocs>(
    {
        userId: {
            type: ObjectId,
            ref: 'User',
            require: true,
        },
        amount: {
            type: Number,
            required: true,
        },
        currency: {
            type: String,
            enum: Object.values(Currency),
            default: Currency.INR,
        },
        razorpayLinkId: {
            type: String,
            required: true,
            unique: true,
        },
        razorpayLinkReferenceId: {
            type: String,
        },
        paymentStatus: {
            type: String,
            enum: Object.values(PaymentStatus),
            default: PaymentStatus.CREATED,
        },
        customerDetails: {
            name: { type: String },
            email: { type: String },
            contact: { type: Number },
        },
    },
    {
        id: false,
        timestamps: true,
        toJSON: {
            getters: true,
        },
        toObject: {
            getters: true,
        },
    }
);

export const Payment = model<IPaymentDocs, IPaymentModel>('Payment', PaymentSchema, 'payments');
