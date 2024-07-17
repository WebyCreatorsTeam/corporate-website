import mongoose, { Mongoose } from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

interface MongooseConnection {
    conn: Mongoose | null;
    promise: Promise<Mongoose> | null;
}

// Cache to store the mongoose connection
let cached: MongooseConnection = (global as any).mongoose;

// If the cache is empty, initialize it
if (!cached) {
    cached = (global as any).mongoose = {
        conn: null,
        promise: null,
    };
}

export const connectToDatabase = async () => {
    try {
        // If the connection already exists, return it
        if (cached.conn) return cached.conn;

        if (!MONGODB_URI) throw new Error('Missing MONGODB_URL');

        // If the connection promise doesn't exist, create a new one
        cached.promise =
            cached.promise ||
            mongoose.connect(MONGODB_URI, {
                bufferCommands: false,
            });

        // Await the connection promise and store the connection in the cache
        cached.conn = await cached.promise;
        // Return the established connection
        return cached.conn;
    } catch (error) {
        throw new Error('Error while trying to established db connection ');
    }
};

export default connectToDatabase;