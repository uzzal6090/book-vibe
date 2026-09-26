"use client";

import React, {
  createContext,
  ReactNode,
  useEffect,
  useState,
} from "react";

import { IBook } from "@/types/books.type";

interface IBooksContext {
  readBooks: IBook[];
  setReadBooks: React.Dispatch<React.SetStateAction<IBook[]>>;

  wishlist: IBook[];
  setWishlist: React.Dispatch<React.SetStateAction<IBook[]>>;

  removeFromRead: (bookId: number) => void;
  removeFromWishlist: (bookId: number) => void;
}

export const BooksContext = createContext<IBooksContext | undefined>(
  undefined
);

const BooksProvider = ({ children }: { children: ReactNode }) => {
  const [readBooks, setReadBooks] = useState<IBook[]>([]);
  const [wishlist, setWishlist] = useState<IBook[]>([]);
  const [hydrated, setHydrated] = useState(false);

  // Load saved books from localStorage
  useEffect(() => {
    const savedReadBooks = localStorage.getItem("readBooks");
    const savedWishlist = localStorage.getItem("wishlist");

    if (savedReadBooks) {
      setReadBooks(JSON.parse(savedReadBooks));
    }

    if (savedWishlist) {
      setWishlist(JSON.parse(savedWishlist));
    }

    setHydrated(true);
  }, []);

  // Save read books
  useEffect(() => {
    if (!hydrated) return;

    localStorage.setItem(
      "readBooks",
      JSON.stringify(readBooks)
    );
  }, [readBooks, hydrated]);

  // Save wishlist
  useEffect(() => {
    if (!hydrated) return;

    localStorage.setItem(
      "wishlist",
      JSON.stringify(wishlist)
    );
  }, [wishlist, hydrated]);

  const removeFromRead = (bookId: number) => {
    setReadBooks((previousBooks) =>
      previousBooks.filter(
        (book) => book.bookId !== bookId
      )
    );
  };

  const removeFromWishlist = (bookId: number) => {
    setWishlist((previousBooks) =>
      previousBooks.filter(
        (book) => book.bookId !== bookId
      )
    );
  };

  const sharedData: IBooksContext = {
    readBooks,
    setReadBooks,
    wishlist,
    setWishlist,
    removeFromRead,
    removeFromWishlist,
  };

  return (
    <BooksContext.Provider value={sharedData}>
      {children}
    </BooksContext.Provider>
  );
};

export default BooksProvider;