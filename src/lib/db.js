import mongoose from "mongoose"

export const ConnectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL2)
        console.log('MongoDB connected')
    } catch (error) {
        console.log(error)
    }
}