import mongoose from 'mongoose';
import { ProcessEnv } from './index';
import { logger } from '../utils';
export const connectDB = async (): Promise<void> => {
    try {
        const mongoURI = ProcessEnv.MONGO_URI;
        if (!mongoURI) {
            throw new Error('MONGO_URI is not defined in environment variables');
        }
        await mongoose.connect(mongoURI, {
            connectTimeoutMS: 10000,
            serverSelectionTimeoutMS: 10000,
        });
        mongoose.set('debug', ProcessEnv.MONGO_DEBUG === 'true');

        logger.info('⚡ Database connected. ⚡');
    } catch (error) {
        logger.error('🚨 Exhausted all retries. database connection failed. exiting process. 🚨', error);
        throw new Error('Failed to connect to the database');
    }
};
