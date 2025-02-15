const books = [
{title: 'Book1', genre: 'Fiction', publish: 2000, edition: 2004
},
{title: 'Book2', genre: 'History', publish: 2002, edition: 2005
},
{title: 'Book3', genre: 'History', publish: 2001, edition: 2006
},
{title: 'Book4', genre: 'Fiction', publish: 2019, edition: 2020
},
{title: 'Book5', genre: 'Science', publish: 2009, edition: 2010
},
{title: 'Book6', genre: 'Non-Fiction', publish: 2021, edition: 2022
},
{title: 'Book7', genre: 'Science', publish: 2013, edition: 2014
},
{title: 'Book8', genre: 'Non-Fiction', publish: 2011, edition: 2012
},
{title: 'Book9', genre: 'Romance', publish: 2009, edition: 2011
}
];
const userBook =books.filter( (bk) => bk.genre ==='History')

console.log(userBook)
const userBook =books.filter( (bk) => bk.genre ==='History')
const userBooks = books.filter((bk) => bk.publish>2000 && bk.genre ==='History')

//console.log(userBook)
console.log(userBooks)
