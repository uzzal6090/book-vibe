"use client";

import { IBook } from "@/types/books.type";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface IBookCardProps {
  book: IBook;
}

const BookCard = ({ book }: IBookCardProps) => {
  return (
    <div className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Book Image */}
      <div className="relative h-72 overflow-hidden bg-slate-100">
        <Image
          src={book.image}
          alt={book.bookName}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />

        {/* Rating */}
        <div className="absolute right-3 top-3 rounded-full bg-white/95 px-3 py-1.5 text-sm font-semibold text-slate-800 shadow-md">
          ⭐ {book.rating}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <span className="inline-block rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-600">
          {book.category}
        </span>

        <h2 className="mt-3 line-clamp-1 text-xl font-bold text-slate-800">
          {book.bookName}
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          By {book.author}
        </p>

        <div className="mt-4 flex items-center justify-between text-sm text-slate-500">
          <span>{book.totalPages} Pages</span>

          <span>⭐ {book.rating}</span>
        </div>

        <Link
          href={`/books/${book.bookId}`}
          className="mt-5 block rounded-xl bg-indigo-600 px-5 py-3 text-center text-sm font-semibold text-white transition-all duration-300 hover:bg-indigo-700 hover:shadow-md"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default BookCard;