function findAccountById(accounts, id){
  let results = null; 
  accounts.forEach((account) => {
    if (account.id === id){
      results = account; 
    } 
  })
  return results; 
}     

/*function findAccountById(accounts, id) {
 for (let i = 0; i < accounts.length; i++){
   if (accounts[i].id === id){
     return accounts[i];
   }
 }
}*/

function sortAccountsByLastName(accounts) {
  return accounts.sort((first, second) => first.name.last < second.name.last ? -1 : 1)
}

function getTotalNumberOfBorrows(account, books) {
  return books.reduce((total, book) => {
    const borrows = book.borrows; 
     borrows.forEach( borrow => {
       if (borrow.id === account.id)
         total += 1;
     })
    return total; 
  }, 0)
}

function getBooksPossessedByAccount(account, books, authors) {
const checkedOutBooks = []; 

  for (const bookIndex in books) {
    const book = books[bookIndex];
    if (book.borrows.some((borrow) => borrow.id === account.id && !borrow.returned)) {
      for (const authorIndex in authors) {
        const author = authors[authorIndex];
        if (book.authorId === author.id) {
          checkedOutBooks.push({ ...book, author });
        }
      }
    }
  }

  return checkedOutBooks;
}






module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
