"use client";

import { BooksContext } from "@/context/BooksContext";
import { IBook } from "@/types/books.type";
import React, { useContext } from "react";
import { toast } from "react-toastify";

interface IWishListButtonProps {
  book: IBook;
}

const WishListButton = ({
  book,
}: IWishListButtonProps) => {
  const context = useContext(BooksContext);

  if (!context) {
    return null;
  }

  const { wishlist, setWishlist } = context;

  const handleWishlist = () => {
    const alreadyExists = wishlist.some(
      (wishlistBook) => wishlistBook.bookId === book.bookId
    );

    if (alreadyExists) {
      toast.warning("This book is already in your Wishlist!");
      return;
    }

    setWishlist((previousBooks) => [
      ...previousBooks,
      book,
    ]);

    toast.success("Book added to Wishlist!");
  };

  return (
    <button
      onClick={handleWishlist}
      className="rounded-xl border border-indigo-600 px-6 py-3 font-semibold text-indigo-600 transition hover:bg-indigo-50"
    >
      Add to Wishlist
    </button>
  );
};

export default WishListButton;