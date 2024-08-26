import mongoose from "mongoose";

let isConnected = false; // Track the connection status

export const ConnectDB = async () => {
    if (isConnected) {
        console.log("MongoDB is already connected.");
        return;
    }

    try {
        await mongoose.connect(process.env.MONGO_URL2, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        isConnected = true;
        console.log("MongoDB connected successfully.");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        throw new Error("Failed to connect to MongoDB");
    }
};
