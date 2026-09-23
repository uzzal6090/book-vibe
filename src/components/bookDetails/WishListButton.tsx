"use client";

import { BooksContext } from "@/context/BooksContext";
import { IBook } from "@/types/books.type";
import React, { useContext } from "react";

const WishListButton = ({ book }: { book: IBook }) => {
  const { wishlist, setWishlist } = useContext(BooksContext);

  const handleAddToWishlist = () => {
    console.log("wishlist button triggered", book);

    setWishlist([...wishlist, book]);

    alert(`"${book.bookName}" added to your wishlist`);
  };

  return (
    <button
      className="btn rounded-xl border-0 bg-indigo-600 px-6 text-white shadow-md transition hover:bg-indigo-700 hover:shadow-lg"
      onClick={handleAddToWishlist}
    >
      Wishlist
    </button>
  );
};

export default WishListButton;