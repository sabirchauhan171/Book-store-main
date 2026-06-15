const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/bookController');

router.get('/', ctrl.getAllBooks);

router.get('/add', ctrl.getAddForm);
router.post(
    '/add',
    ctrl.upload.single('image'),
    ctrl.addBook
);

router.get('/edit/:id', ctrl.getEditForm);

router.put(
    '/edit/:id',
    ctrl.upload.single('image'),
    ctrl.updateBook
);

router.delete('/delete/:id', ctrl.deleteBook);

module.exports = router;
