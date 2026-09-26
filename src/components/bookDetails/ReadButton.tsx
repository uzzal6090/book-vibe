"use client";

import { BooksContext } from "@/context/BooksContext";
import { IBook } from "@/types/books.type";
import React, { useContext } from "react";
import { toast } from "react-toastify";

interface IReadButtonProps {
  book: IBook;
}

const ReadButton = ({ book }: IReadButtonProps) => {
  const context = useContext(BooksContext);

  if (!context) {
    return null;
  }

  const { readBooks, setReadBooks } = context;

  const handleReadBook = () => {
    const alreadyExists = readBooks.some(
      (readBook) => readBook.bookId === book.bookId
    );

    if (alreadyExists) {
      toast.warning("This book is already in your Read Books!");
      return;
    }

    setReadBooks((previousBooks) => [
      ...previousBooks,
      book,
    ]);

    toast.success("Book added to Read Books!");
  };

  return (
    <button
      onClick={handleReadBook}
      className="rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-700"
    >
      Read
    </button>
  );
};

export default ReadButton;