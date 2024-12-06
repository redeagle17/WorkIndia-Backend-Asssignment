const USERS_TABLE = {
    "ENUM": `CREATE TYPE user_role AS ENUM ('admin', 'user');`,
    "TABLE": `CREATE TABLE "users" (
                user_id SERIAL PRIMARY KEY,  
                name VARCHAR(50) NOT NULL,           
                password VARCHAR(50) NOT NULL,       
                role user_role NOT NULL,              
                refreshToken VARCHAR(255),            
                accessToken VARCHAR(255)              
            );`,
}


// import { getPool } from "../db/dbConnector.js";

// const demoInsert = async (name, id) => {
//     const pool = getPool();
    
//     await pool.query(
//         'INSERT INTO "demoTable" (name) VALUES ($1)',
//         [name]
//     );    
// }

// export { demoInsert };
