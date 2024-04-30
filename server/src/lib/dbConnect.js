import mongoose from "mongoose";

export const dbConnect = async () => {
    try {
        const db = mongoose.connect(process.env.MONGODB_CONNECTION_STRING)
        .then(()=>{
            console.log("Database Connected Successfully");
        })
        return db;
    } catch (error) {
        console.log("Error connecting to database -->", error);
        process.exit(1);
    }
}
