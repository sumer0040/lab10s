const Books = require('../models/books');
module.exports = {
  
  getAllBooks: (req, res) => {
  Books.find().lean().then((books) => {
  res.render( 'home', {books} ); })
    
  },

  getAllBookdetail: (req, res) =>{
  Books.findOne({ bookNumber: req.params.bookNumber }).lean().then((book) => {
  res.render( 'books', { book: book } ); })
  },
};
 