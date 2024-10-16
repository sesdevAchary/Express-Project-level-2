// For defining mongoose model for Book entity in mongodb Database//

/*A Mongoose model is essentially a constructor that creates instances of documents in a MongoDB collection. These instances are JavaScript objects that represent documents in the database and provide access to Mongoose’s methods for interacting with the data.*/

import mongoose from 'mongoose'

const  bookSchema = new mongoose.Schema({
/*The bookSchema is an object that defines the shape and structure of documents in the Books collection.*/
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

/*mongoose.model():
This function is used to create a model in Mongoose. A model represents a MongoDB collection and provides an interface for interacting with documents in that collection*/

/*reates a model named BookModel that represents the Books collection in MongoDB.
Binds the bookSchema to this model, meaning any document created, retrieved, or manipulated using BookModel must adhere to the structure defined in the schema.*/

//can now be used to interact with the Books collection, allowing to create, read, update, or delete documents.//



// exporting //
module.exports= bookModel;


