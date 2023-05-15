function getTotalBooksCount(books) {
  // create count varialbe
  let totalBooks = 0;
  books.forEach((books) => totalBooks ++); // same as +=1
  return totalBooks; 
}

function getTotalAccountsCount(accounts) {
  let accountTotal = 0; 
  accounts.forEach((account) => accountTotal++); 
  return accountTotal; 
}


function getBooksBorrowedCount(books) {
  let count = 0;
  books.forEach(({ borrows }) => {
    borrows.forEach(({ returned }) => {
      if (returned === false) {
        count++;
      }
    });
  });
  return count;
}
/* function getBooksBorrowedCount(books) {
let count = 0; 
  for (let i = 0; i < books.length; i++){ 
    const book = books[i]; 
      for (let j = 0; j < book.borrows.length; j++)
        if (book.borrows[j].returned === false) { 
          count ++; 
        }
    }
    return count; 
  } */
  


function getMostCommonGenres(books) {
  // create an object to hold genre counts
  const genreCounts = {};
  // loop through books and count each genre
  books.forEach((book) => {
    const genre = book.genre;
    if (genreCounts[genre]) {
      genreCounts[genre]++;
    } else {
      genreCounts[genre] = 1;
    }
  });
  // convert genreCounts object into an array of objects with name and count keys
  const genreArray = Object.entries(genreCounts).map(([name, count]) => ({ name, count }));
  // sort the genreArray highest to lowest 
  const sortedGenres = genreArray.sort((a, b) => b.count - a.count);
  // return the top 5 genres or all genres if less than 5 exist
  return sortedGenres.slice(0, 5);
}

function getMostPopularBooks(books) {
  const bookCounts = books.map(book => {
    return {
      name: book.title,
      count: book.borrows.length
    };
  });
  const sortedBookCounts = bookCounts.sort((a, b) => b.count - a.count);
  return sortedBookCounts.slice(0, 5);
}

function getMostPopularAuthors(books, authors) {
  const borrowCounts = {};
  books.forEach((book) => {
    const author = authors.find((author) => author.id === book.authorId); 
    const name = `${author.name.first} ${author.name.last}`; 
    if (!borrowCounts[name]) {
      borrowCounts[name] = book.borrows.length;
    } else {
      borrowCounts[name] += book.borrows.length;
    }
  });
  const authorCounts = [];
  for (const [name, count] of Object.entries(borrowCounts)) {
    authorCounts.push({ name, count });
  } 
  authorCounts.sort((a, b) => b.count - a.count);
  return authorCounts.slice(0, 5);
}


module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
