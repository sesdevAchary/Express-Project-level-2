// Integrating a Database//

// yet we've built an in-memory array but from now on ww need a dataBase to store data persistently..//

/* MongoDB is an excellent choice for several reasons. It’s flexible, scalable, and works well with JavaScript and Node.js. Plus, its document-oriented nature makes it a good fit for JSON data.*/


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