
import React from "react";
import BookCard from "../shared/BookCard";
import { IBook } from "@/types/books.type";

type Book = {
  bookId: number;
  bookName: string;
  author: string;
  image: string;
  review: string;
  totalPages: number;
  rating: number;
  category: string;
  tags: string[];
  publisher: string;
  yearOfPublishing: number;
};

const getBooks = async (): Promise<Book[]> => {
  const response = await fetch("http://localhost:3000/booksData.json", {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch books");
  }

  return response.json();
};

const Books = async () => {
  const booksData = await getBooks();

  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ================= HEADER ================= */}
        <div className="mb-12 text-center">

          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-indigo-600">
            Discover • Read • Enjoy
          </p>

          <h1 className="font-serif text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Explore Our{" "}
            <span className="text-indigo-600">Book Collection</span>
          </h1>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
            Discover timeless classics, inspiring stories, and unforgettable
            adventures carefully selected for every kind of reader.
          </p>

        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg-:grid-cols-3">
          {

            booksData .slice(0, 4).map((book: IBook, ind:number) => {
        
          return<BookCard key={ind} book={book}></BookCard>
            })
          }


        </div>
       
      </div>
    </section>
  );
};

export default Books;