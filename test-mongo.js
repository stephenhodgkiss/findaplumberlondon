require('dotenv').config({ path: '.env.local' });
const { MongoClient } = require('mongodb');

// Get the base URI
const uri = process.env.MONGO_DB_URI;

console.log('Testing connection to MongoDB...');
console.log('URI format check:', uri.startsWith('mongodb+srv://'));

const client = new MongoClient(uri, {
  connectTimeoutMS: 30000,
  socketTimeoutMS: 45000,
  serverSelectionTimeoutMS: 30000,
  tls: true,
  tlsAllowInvalidCertificates: true,  // Allow self-signed certs for testing
  directConnection: false,
  retryWrites: true,
  retryReads: true,
  maxPoolSize: 1,
  minPoolSize: 1,
  serverApi: {
    version: '1',
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    console.log('Attempting to connect...');
    console.log('Using Node.js version:', process.version);
    
    // Try to resolve DNS first
    const dns = require('dns');
    const util = require('util');
    const resolve = util.promisify(dns.resolve);
    
    try {
      const addresses = await resolve('plumberlondon-shard-00-00.bie3m.mongodb.net');
      console.log('DNS Resolution successful:', addresses);
    } catch (dnsErr) {
      console.error('DNS Resolution failed:', dnsErr);
    }
    
    console.log('Attempting MongoDB connection with relaxed TLS...');
    await client.connect();
    console.log('Connected successfully to MongoDB');
    
    // Try to list databases as a connection test
    const adminDb = client.db().admin();
    const result = await adminDb.listDatabases();
    console.log('Available databases:', result.databases.map(db => db.name));
  } catch (err) {
    console.error('Connection error details:', {
      name: err.name,
      message: err.message,
      code: err.code,
      stack: err.stack
    });
  } finally {
    await client.close();
  }
}

run();
