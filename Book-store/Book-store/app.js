 const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const path = require('path');
const bookRoutes = require('./routes/Routes');

const app = express();

mongoose.connect('mongodb://localhost:27017/bookstore')
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));
app.use('/uploads', express.static(path.join(__dirname, 'public/uploads')));
app.use('/public', express.static(path.join(__dirname, 'public')));

app.use('/books', bookRoutes);
app.get('/', (req, res) => res.redirect('/books'));

app.listen(8000, () => 
  console.log('Server running on http://localhost:8000')
);
