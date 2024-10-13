// For defining mongoose model for Book entity in mongodb Database//

/*A Mongoose model is essentially a constructor that creates instances of documents in a MongoDB collection. These instances are JavaScript objects that represent documents in the database and provide access to Mongoose’s methods for interacting with the data.*/

import mongoose from 'mongoose'

const  bookSchema = new mongoose.Schema({
/*The bookSchema is an object that defines the structure of documents in the Books collection.*/
    title:{
        type: String,
        require: true,
        unique: true
    },
    author:{
        type: String, 
        require: true, 
    }
})

// creating the bookmodel//
const bookModel = mongoose.model("books" , bookSchema);