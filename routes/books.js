const express = require('express');
const router = express.Router();
const Book = require('../models/book');

router.get('/hi', async (req, res) => {
    res.send('get api is working')
})

router.get('/all-book', async (req, res) => {
    try {
        const books = await Book.find();
        res.json(books);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


router.get('/:id', (req, res) => {
    res.json(res.book);
});


router.post('/add-books', async (req, res) => {
    const book = new Book(req.body);
    try {
        const newBook = await book.save();
        res.json(newBook);
    } catch (error) {
        res.json({ message: error.message });
    }
});
router.put('/update-book/:id', async (req, res) => {
    const { tittle, author, genre,price,pages } = req.body;

    try {
        const updatedBook = await Book.findByIdAndUpdate(
            req.params.id,
            { tittle, author, genre, price, pages },
        );

        if (!updatedBook) {
            return res.json({ message: 'Book not found' });
        }

        res.json(updatedBook);
    } catch (error) {
        res.json({ message: error.message });
    }
});

router.delete('/delete-book/:id', async (req, res) => {
    try {
        const deletedBook = await Book.findByIdAndDelete(req.params.id);

        if (!deletedBook) {
            return res.json({ message: 'Book not found' });
        }

        res.json({ message: 'Book deleted successfully' });
    } catch (error) {
        res.json({ message: error.message });
    }
});





router.get('/author/:author', async (req, res) => {
    try {
        const booksByAuthor = await Book.find({ author: req.params.author });
        if(booksByAuthor.length === 0){
            return res.send('Not Found')
        }
        res.json(booksByAuthor);
    } catch (error) {
        res.json({ message: error.message });
    }
});

router.get('/tittle/:tittle', async (req, res) => {
    try {
        const booksByTittle = await Book.find({ tittle: req.params.tittle });
        if(booksByTittle.length === 0){
            return res.send('Not Found')
        }
        res.json(booksByTittle);
    } catch (error) {
        res.json({ message: error.message });
    }
});


router.get('/genre/:genre', async (req, res) => {
    try {
        const booksByGenre = await Book.find({ genre: req.params.genre });
        if(booksByGenre.length === 0){
            return res.send('Not Found')
        }
        res.json(booksByGenre);
    } catch (error) {
        res.json({ message: error.message });
    }
});

router.get('/prices/:prices',async(req,res)=>{
    try{
        const findByPrices = await Book.find({price: req.params.prices});
        if(findByPrices.length === 0){
            return res.send('Not Found')
        }
        res.json({findByPrices});
    }catch(error){
        res.json({message:error.message})
    }
})
module.exports = router;