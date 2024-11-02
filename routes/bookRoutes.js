import express from "express"
import bookController from '../controllers/bookController.js'

const router = express.Router();

router.post('/books' , bookController.createBook);
router.get('/books' , bookController.getAllBooks);
router.get('/books/:id' , bookController.getBookById);
router.put('/books/:id' , bookController.updateBookById);
router.delete('/books/:id' , bookController.deleteBookById);

export default router 