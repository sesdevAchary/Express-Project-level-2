const bookModel = require('../models/bookModel')


/* createa a fun , exported as a module*/
exports.createBook = async(req,res)=>{

/* creating a new book instance(which is a mongoose model), representing a book in db*/
let singleBook = new bookModel({title:req.body.title, auhtor:req.body.auhtor});

// saving the book to the database //
/* await key pauses exec until the save op is complete and returns the saved doc , stored in singleBook*/
singleBook = await singleBook.save();

}