const bookModel = require('../models/bookModel')


// CREATING A BOOK ....................................................//


/* createa a fun , exported as a module*/
exports.createBook = async(req,res)=>{

    try{
/* creating a new book instance(which is a mongoose model), representing a book in db*/
let singleBook = new bookModel({title:req.body.title, auhtor:req.body.auhtor});

// saving the book to the database //
/* await key pauses exec until the save op is complete and returns the saved doc , stored in singleBook*/
singleBook = await singleBook.save();
res.send(singleBook);

} catch(error){
    res.status(400).send(error.message)
}

}


//  GETTING ALL THE BOOKS...........................................................................................//

const getAllBooks = async(req,res)=>{
    try{
        const everyBook = await bookModel.find();
        res.send(everyBook);
    } catch(error){
        res.send(error.message);
    }

}





// GET A BOOK BY ID ...................................................................................................//



exports.getBookById = async(req,res)=>{
    try{
        const bookById = await bookModel.findById(req.params.id)
        if(!bookById) return res.status(404).send(`book not found `)
            else{
             res.send(bookById);
        }

        }catch (error){
            res.status(400).send(error.message)
    }
}




// UPDATE A BOOK BY ID ...................................................................................................//


exports.updateBookById = async(req,res)=>{
    try{
        const updateBook=await bookModel.findByIdAndUpdate(req.params.id,{ title:req.body.title,auhtor:req.body.author},{new:true});
        if(!updateBook) return res.status(400).send(`book cant be updated`)
         else{
        res.send(updateBook);
        }
    } catch(error){
        res.send(error.message)
    }
};





// DELETE A BOOK BY ID ...................................................................................................//

exports.deleteBookById = async(req,res)=>{
    try{
        const deleteBook = await bookModel.findByIdAndDelete(req.params.id);
        if(!deleteBook) res.status(404).send(`book not found`)
            else{
            res.send(deleteBook)
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
};