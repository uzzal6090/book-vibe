import ReadButton from '@/components/bookDetails/ReadButton';
import { IBook } from '@/types/books.type';
import Image from 'next/image';
import React from 'react';

interface IBookDetailsPageProps {

    params : Promise<{

        id:string;
    }>
}

const getBooks = async (): Promise<IBook[]> => {
  const response = await fetch("http://localhost:3000/booksData.json", {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch books");
  }

  return response.json();
};


const BookDetailsPage =async ({params } :IBookDetailsPageProps) => {

    const { id } =  await params;
    const booksData = await getBooks();
    const book = booksData.find((book: IBook) => String(book.bookId ) === String(id)
  ) as IBook;
  
    console.log(book, "book")
   
       
return (
  <div className="container mx-auto px-4 py-10">
    <div className="card lg:card-side overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">

      {/* ================= BOOK IMAGE ================= */}
      <figure className="relative bg-slate-100 p-6 lg:w-2/5">
        <div className="relative overflow-hidden rounded-2xl shadow-lg">
          <Image
            src={book.image}
            alt={book.bookName}
            width={500}
            height={300}
            className="h-[420px] w-full object-cover transition duration-500 hover:scale-105"
          />

          {/* Rating Badge */}
          <div className="absolute right-4 top-4 rounded-full bg-white/95 px-4 py-2 text-sm font-semibold text-slate-800 shadow-md backdrop-blur">
            ⭐ {book.rating}
          </div>
        </div>
      </figure>

      {/* ================= BOOK DETAILS ================= */}
      <div className="card-body justify-center p-6 sm:p-8 lg:w-3/5 lg:p-10">

        {/* Category */}
        <div className="mb-3">
          <span className="rounded-full bg-indigo-50 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-indigo-600">
            {book.category}
          </span>
        </div>

        {/* Book Name */}
        <h1 className="text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
          {book.bookName}
        </h1>

        {/* Author */}
        <p className="mt-2 text-base text-slate-500">
          Written by{" "}
          <span className="font-semibold text-slate-800">
            {book.author}
          </span>
        </p>

        {/* Divider */}
        <div className="my-6 h-px bg-slate-200" />

        {/* Book Information */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">

          <div className="rounded-2xl bg-slate-50 p-4">
            <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
              Pages
            </p>
            <p className="mt-1 text-lg font-bold text-slate-800">
              {book.totalPages}
            </p>
          </div>

          <div className="rounded-2xl bg-slate-50 p-4">
            <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
              Rating
            </p>
            <p className="mt-1 text-lg font-bold text-slate-800">
              ⭐ {book.rating}
            </p>
          </div>

          <div className="rounded-2xl bg-slate-50 p-4">
            <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
              Published
            </p>
            <p className="mt-1 text-lg font-bold text-slate-800">
              {book.yearOfPublishing}
            </p>
          </div>

          <div className="rounded-2xl bg-slate-50 p-4">
            <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
              Publisher
            </p>
            <p className="mt-1 truncate text-lg font-bold text-slate-800">
              {book.publisher}
            </p>
          </div>

        </div>

        {/* Review */}
        <div className="mt-7">
          <h3 className="mb-2 text-lg font-semibold text-slate-900">
            About this book
          </h3>

          <p className="text-sm leading-7 text-slate-500">
            {book.review}
          </p>
        </div>

        {/* Tags */}
        <div className="mt-6">
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-700">
            Tags
          </h3>

          <div className="flex flex-wrap gap-2">
            {book.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-600 transition hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-600"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="card-actions mt-8 flex flex-wrap gap-3">

          <ReadButton book ={book} />

          <button className="btn rounded-xl border border-slate-200 bg-white px-6 text-slate-700 transition hover:border-indigo-200 hover:bg-indigo-50">
            Wisthlist
          </button>

        </div>

      </div>
    </div>
  </div>
);


  
};

export default BookDetailsPage;