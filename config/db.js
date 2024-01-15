import mongoose from "mongoose";

const connectDB = async () => {
    try{ 
        const conn = await mongoose.connect(process.env.MONGO_URL)
        console.log(`connceted to mongodb database ${conn.connection.host}`.bgMagenta.white)
    }catch(error){
        console.log(`error connecting to mongoDB due to ${error}`.bgRed.white)
    }
};

export default connectDB