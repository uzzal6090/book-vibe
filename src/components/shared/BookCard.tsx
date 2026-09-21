import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface IBookCardProps {

    book: IBook;
}

const BookCard = ({ book } :IBookCardProps) => {
    return (
         <article
              key={book.bookId}
              className="group flex h-full flex-col"
            >

              {/* ================= BOOK COVER ================= */}
              <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-5 transition-all duration-500 ease-out group-hover:-translate-y-1 group-hover:border-indigo-100 group-hover:shadow-[0_20px_45px_-20px_rgba(79,70,229,0.25)]">

                <div className="relative h-80 w-full overflow-hidden rounded-xl bg-white shadow-sm">
                  <Image
                    src={book.image}
                    alt={book.bookName}
                    fill
                    className="object-contain p-6 transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>

              </div>

              {/* ================= BOOK INFO ================= */}
              <div className="flex flex-1 flex-col px-1 pt-5">

                {/* Title */}
                <h2 className="line-clamp-2 min-h-[56px] font-serif text-xl font-bold leading-7 text-slate-900 transition-colors duration-300 group-hover:text-indigo-600">
                  {book.bookName}
                </h2>

                {/* Author */}
                <p className="mt-1 text-sm text-slate-500">
                  by{" "}
                  <span className="font-medium text-slate-700">
                    {book.author}
                  </span>
                </p>

                {/* Category + Rating */}
                <div className="mt-4 flex items-center justify-between">

                  <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-600">
                    {book.category}
                  </span>

                  <div className="flex items-center gap-1 text-sm">
                    <span className="text-amber-400">★</span>

                    <span className="font-semibold text-slate-700">
                      {book.rating}
                    </span>

                    <span className="text-slate-400">
                      / 5
                    </span>
                  </div>

                </div>

                {/* Divider */}
                <div className="my-5 h-px bg-slate-100" />

                {/* Book Details */}
                <div className="flex items-center justify-between text-xs text-slate-500">

                  <span>
                    {book.totalPages} pages
                  </span>

                  <span className="h-1 w-1 rounded-full bg-slate-300" />

                  <span>
                    {book.yearOfPublishing}
                  </span>

                  <span className="h-1 w-1 rounded-full bg-slate-300" />

                  <span className="max-w-[100px] truncate">
                    {book.publisher}
                  </span>

                </div>

                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {book.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-slate-400"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Button */}
                <Link
                  href={`/books/${book.bookId}`}
                  className="mt-5 flex items-center justify-between border-b border-slate-200 pb-3 text-sm font-semibold text-slate-700 transition-all duration-300 group-hover:border-indigo-600 group-hover:text-indigo-600"
                >
                  <span>View Details</span>

                  <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>

              </div>
            </article>
    );
};

export default BookCard;