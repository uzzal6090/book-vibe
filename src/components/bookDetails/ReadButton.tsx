"use client";

import { BooksContext } from "@/context/BooksContext";
import { IBook } from "@/types/books.type";
import React, { useContext } from "react";

const ReadButton = ({ book }: { book: IBook }) => {
  const {readBooks, setReadBooks} = useContext(BooksContext);

  

  const handleReadBook = () => {
    console.log("read book btn triggered", book);

    setReadBooks([...readBooks, book]);
    alert(`you have read "${book.bookName}"`);
  };

  return (
    <button
      className="btn rounded-xl border-0 bg-indigo-600 px-6 text-white shadow-md transition hover:bg-indigo-700 hover:shadow-lg"
      onClick={handleReadBook}
    >
      Read
    </button>
  );
};

export default ReadButton;