import dotenv from 'dotenv';

dotenv.config();

type ProcessEnv = {
    port: string;
    SERVER_NAME: string;
    MONGO_URI: string;
    NODE_ENV: string;
    MONGO_DEBUG: string;
    JWT_SECRET: string;
    JWT_EXPIRES_IN: string;
    RAZORPAY_KEY_ID: string;
    RAZORPAY_KEY_SECRET: string;
    RAZORPAY_WEBHOOK_SECRET: string;
};

export const ProcessEnv: ProcessEnv = {
    port: process.env.PORT!,
    SERVER_NAME: process.env.SERVER_NAME!,
    MONGO_URI: process.env.MONGO_URI!,
    NODE_ENV: process.env.NODE_ENV!,
    MONGO_DEBUG: process.env.MONGO_DEBUG!,
    JWT_SECRET: process.env.JWT_SECRET!,
    JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN!,
    RAZORPAY_KEY_ID: process.env.RAZORPAY_KEY_ID!,
    RAZORPAY_KEY_SECRET: process.env.RAZORPAY_KEY_SECRET!,
    RAZORPAY_WEBHOOK_SECRET: process.env.RAZORPAY_WEBHOOK_SECRET!,
};
