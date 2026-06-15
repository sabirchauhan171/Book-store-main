const Book = require('../models/Book');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
destination: (req, file, cb) => {
cb(null, 'public/uploads/');
},


filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
}


});

exports.upload = multer({ storage });

exports.getAllBooks = async (req, res) => {
try {
const books = await Book.find();
res.render('books/index', { books });
} catch (error) {
console.log(error);
res.status(500).send('Server Error');
}
};

exports.getAddForm = (req, res) => {
res.render('books/add');
};

exports.addBook = async (req, res) => {
try {
const book = new Book({
title: req.body.title,
author: req.body.author,
category: req.body.category,
price: req.body.price,
quantity: req.body.quantity,
description: req.body.description,
image: req.file ? req.file.filename : ''
});


    await book.save();

    res.redirect('/books');

} catch (error) {
    console.log(error);
    res.status(500).send('Unable To Add Book');
}


};

exports.getEditForm = async (req, res) => {
try {
const book = await Book.findById(req.params.id);

    if (!book) {
        return res.redirect('/books');
    }

    res.render('books/edit', { book });

} catch (error) {
    console.log(error);
    res.redirect('/books');
}

};

exports.updateBook = async (req, res) => {
try {
const book = await Book.findById(req.params.id);

    if (!book) {
        return res.redirect('/books');
    }

    book.title = req.body.title;
    book.author = req.body.author;
    book.category = req.body.category;
    book.price = req.body.price;
    book.quantity = req.body.quantity;
    book.description = req.body.description;

    if (req.file) {
        book.image = req.file.filename;
    }

    await book.save();

    res.redirect('/books');

} catch (error) {
    console.log(error);
    res.status(500).send('Unable To Update Book');
}

};

exports.deleteBook = async (req, res) => {
try {
await Book.findByIdAndDelete(req.params.id);
res.redirect('/books');
} catch (error) {
console.log(error);
res.status(500).send('Unable To Delete Book');
}
};
