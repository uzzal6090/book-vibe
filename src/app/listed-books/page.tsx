"use client";

import { BooksContext } from "@/context/BooksContext";
import { IBook } from "@/types/books.type";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";

const ListedBooks = () => {
  const context = useContext(BooksContext);

  if (!context) {
    return null;
  }

  const {
    readBooks,
    wishlist,
    removeFromRead,
    removeFromWishlist,
  } = context;

  return (
    <div className="mx-auto max-w-6xl px-4">
      {/* ================= HEADER ================= */}

      <h2 className="my-4 rounded-3xl bg-amber-100 py-16 text-center text-4xl font-bold">
        Listed Books
      </h2>

      {/* ================= TABS ================= */}

      <div className="tabs tabs-border">

        {/* ================================================== */}
        {/* READ BOOKS TAB */}
        {/* ================================================== */}

        <input
          type="radio"
          name="my_tabs_2"
          className="tab"
          aria-label={`Read Books (${readBooks.length})`}
          defaultChecked
        />

        <div className="tab-content border-base-300 bg-base-100 p-10">
          {readBooks.length > 0 ? (
            <div className="space-y-5">
              {readBooks.map((book: IBook) => (
                <div
                  key={book.bookId}
                  className="group flex w-full flex-col gap-5 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:flex-row sm:items-center"
                >
                  {/* ================= IMAGE ================= */}

                  <div className="relative h-52 w-full shrink-0 overflow-hidden rounded-xl bg-slate-100 sm:h-40 sm:w-28">
                    <Image
                      src={book.image}
                      alt={book.bookName}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="112px"
                    />
                  </div>

                  {/* ================= BOOK INFO ================= */}

                  <div className="flex flex-1 flex-col justify-between gap-3">

                    {/* Title + Author */}
                    <div>
                      <h2 className="text-xl font-bold text-slate-800 transition-colors group-hover:text-indigo-600">
                        {book.bookName}
                      </h2>

                      <p className="mt-1 text-sm text-slate-500">
                        By {book.author}
                      </p>
                    </div>

                    {/* Category + Pages + Rating */}
                    <div className="flex flex-wrap items-center gap-2 text-sm">
                      <span className="rounded-full bg-indigo-50 px-3 py-1 font-medium text-indigo-600">
                        {book.category}
                      </span>

                      <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-600">
                        {book.totalPages} Pages
                      </span>

                      <span className="rounded-full bg-amber-50 px-3 py-1 font-medium text-amber-600">
                        ⭐ {book.rating}
                      </span>
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-wrap gap-3">

                      {/* View Details */}
                      <Link
                        href={`/books/${book.bookId}`}
                        className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-indigo-700 hover:shadow-md"
                      >
                        View Details

                        <span className="transition-transform duration-300 group-hover:translate-x-1">
                          →
                        </span>
                      </Link>

                      {/* Remove */}
                      <button
                        onClick={() =>
                          removeFromRead(book.bookId)
                        }
                        className="inline-flex items-center gap-2 rounded-xl border border-red-200 bg-red-50 px-5 py-2.5 text-sm font-semibold text-red-600 transition-all duration-300 hover:bg-red-600 hover:text-white"
                      >
                        🗑 Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="py-10 text-center text-lg font-semibold text-slate-500">
              No read books found
            </p>
          )}
        </div>

        {/* ================================================== */}
        {/* WISHLIST TAB */}
        {/* ================================================== */}

        <input
          type="radio"
          name="my_tabs_2"
          className="tab"
          aria-label={`Wishlist Books (${wishlist.length})`}
        />

        <div className="tab-content border-base-300 bg-base-100 p-10">
          {wishlist.length > 0 ? (
            <div className="space-y-5">
              {wishlist.map((book: IBook) => (
                <div
                  key={book.bookId}
                  className="group flex w-full flex-col gap-5 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:flex-row sm:items-center"
                >
                  {/* ================= IMAGE ================= */}

                  <div className="relative h-52 w-full shrink-0 overflow-hidden rounded-xl bg-slate-100 sm:h-40 sm:w-28">
                    <Image
                      src={book.image}
                      alt={book.bookName}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="112px"
                    />
                  </div>

                  {/* ================= BOOK INFO ================= */}

                  <div className="flex flex-1 flex-col justify-between gap-3">

                    {/* Title + Author */}
                    <div>
                      <h2 className="text-xl font-bold text-slate-800 transition-colors group-hover:text-indigo-600">
                        {book.bookName}
                      </h2>

                      <p className="mt-1 text-sm text-slate-500">
                        By {book.author}
                      </p>
                    </div>

                    {/* Category + Pages + Rating */}
                    <div className="flex flex-wrap items-center gap-2 text-sm">
                      <span className="rounded-full bg-indigo-50 px-3 py-1 font-medium text-indigo-600">
                        {book.category}
                      </span>

                      <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-600">
                        {book.totalPages} Pages
                      </span>

                      <span className="rounded-full bg-amber-50 px-3 py-1 font-medium text-amber-600">
                        ⭐ {book.rating}
                      </span>
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-wrap gap-3">

                      {/* View Details */}
                      <Link
                        href={`/books/${book.bookId}`}
                        className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-indigo-700 hover:shadow-md"
                      >
                        View Details

                        <span className="transition-transform duration-300 group-hover:translate-x-1">
                          →
                        </span>
                      </Link>

                      {/* Remove */}
                      <button
                        onClick={() =>
                          removeFromWishlist(book.bookId)
                        }
                        className="inline-flex items-center gap-2 rounded-xl border border-red-200 bg-red-50 px-5 py-2.5 text-sm font-semibold text-red-600 transition-all duration-300 hover:bg-red-600 hover:text-white"
                      >
                        🗑 Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="py-10 text-center text-lg font-semibold text-slate-500">
              No wishlist books found
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListedBooks;