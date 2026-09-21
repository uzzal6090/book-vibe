import React from 'react';


const getBooks =async () => {

 const response = await fetch("   http://localhost:3000/booksData.json");
 const data =  await response.json();
 return data;

}


const Books =async() => {

    const booksData = await getBooks();
    console.log(booksData, booksData)
    return (
        <section className='max-w-6xl mx-auto my-[70px]'>


            Books
            {

                booksData.map((book, ind) => {

                    return <div key={ind}>{book.bookName}</div>
                })
            }
        </section>
    );
};

export default Books;