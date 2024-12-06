import pkg from 'pg';
const { Pool } = pkg;

let pool = null; 

const connectDB = async () => {
    pool = new Pool({
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
    });

    try {
        const client = await pool.connect();
        console.log("Connected to PostgreSQL database successfully");
        client.release();
    } catch (error) {
        console.error("Failed to connect to PostgreSQL", error);
        pool = null;
        process.exit(1);
    }
};

const getPool = () => {
    if (!pool) {
        console.log("Database pool not initialized. Call connectDB first.");
        process.exit(1)
    }
    return pool;
};

export { connectDB, getPool };
