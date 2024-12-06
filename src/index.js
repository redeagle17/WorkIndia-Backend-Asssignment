import { connectDB } from "./db/dbConnector.js";
import app from "./app.js";

connectDB()
    .then(() => {
        app.listen(process.env.PORT || 8000, () => {
            console.log(`Server is running at PORT ${process.env.PORT || 8000}`);
        });
    })
    .catch((error) => {
        console.error("PostgreSQL connection failed", error);
    });
