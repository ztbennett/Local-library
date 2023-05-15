function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id);
}
 /* // loop through authors array to find matching id
  let author = {};
  for (let i = 0; i < authors.length; i++){
   if (authors[i].id === id){
     author = authors[i]; 
   } 
  }
  //console.log(author);
  return author; 
}*/

function findBookById(books, id) {
  return books.find((bookId) => bookId.id === id); 
}

function helperBooksOut(books){
 let returned = books.filter((bookReturned) => bookReturned.borrows[0].returned === true);
  return returned;
}

function partitionBooksByBorrowedStatus(books){
  //let returned = books.filter((bookReturned) => bookReturned.borrows[0].returned === true);
  let returned = helperBooksOut(books);
  let out = books.filter((bookOut) => bookOut.borrows[0].returned === false);
  console.log(returned)
  return [out, returned];
}

/*function partitionBooksByBorrowedStatus(books) {
 const returned = [];
  const out = [];
  for (let i = 0; i < books.length; i++){
    const borrow = books[i].borrows; 
      if (borrow[0].returned === true){
            returned.push(books[i]);
          } else {
            out.push(books[i])
          }
      } 
  return [out, returned]; 
}*/

function getBorrowersForBook(book, accounts) {
  const borrowed = book.borrows.map(borrow => {
    const account = accounts.find(acc => acc.id === borrow.id);
    return { ...borrow, ...account };
  });
  return borrowed.slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
