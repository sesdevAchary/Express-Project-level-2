import express from "express"
const router = express.Router();
import bookController from './controllers/bookController.js'

router.post('/books' , bookController.createbook);
router.get('/books' , bookController.getAllBooks);
router.get('/books/:id' , bookController.getBookById);
router.put('/books/:id' , bookController.updateBookById);
router.delete('/books/:id' , bookController.deleteBookById);

module.exports = router ;