import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(`mongodb://localhost:27017/mydatabase`);
            res.send("succesfully connected");
    }catch(error){
    res.send("failed to connect to mongo Db",error);
    process.exit(1);

    }
};

module.exports = connectDB();