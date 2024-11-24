import { MongoClient, Db } from 'mongodb';

const MONGO_DB_URI = process.env.MONGO_DB_URI;
const MONGODB_DB = process.env.MONGODB_DB;

if (!MONGO_DB_URI) {
  throw new Error('Please define the MONGO_DB_URI environment variable inside .env');
}

if (!MONGODB_DB) {
  throw new Error('Please define the MONGODB_DB environment variable inside .env');
}

let cachedClient: MongoClient | null = null;
let cachedDb: Db | null = null;

export async function connectToDatabase(): Promise<{ client: MongoClient; db: Db }> {
  if (cachedClient && cachedDb) {
    console.log('Using cached MongoDB connection');
    return { client: cachedClient, db: cachedDb };
  }

  console.log('Establishing new MongoDB connection...');
  const opts = {
    maxPoolSize: 10,
    minPoolSize: 5,
    maxIdleTimeMS: 30000,
    connectTimeoutMS: 10000,
    socketTimeoutMS: 45000,
    serverSelectionTimeoutMS: 5000,
    retryWrites: true,
    retryReads: true,
  };

  try {
    const client = await MongoClient.connect(MONGO_DB_URI!, opts);
    const db = client.db(MONGODB_DB);

    console.log('Successfully connected to MongoDB');
    console.log('Database:', MONGODB_DB);
    
    // Test the connection by listing collections
    const collections = await db.listCollections().toArray();
    console.log('Available collections:', collections.map(c => c.name));

    cachedClient = client;
    cachedDb = db;

    return { client, db };
  } catch (error) {
    console.error('MongoDB connection error:', error);
    throw error;
  }
}

export async function getDatabase(): Promise<Db> {
  try {
    console.log('Getting database connection...');
    const { db } = await connectToDatabase();
    return db;
  } catch (error) {
    console.error('Failed to get database:', error);
    throw error;
  }
}
