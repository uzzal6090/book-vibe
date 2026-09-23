

import { IBook } from "@/types/books.type";
import Image from "next/image";
import Link from "next/link";
import ReadButton from "../bookDetails/ReadButton";

interface IBookCardProps {
  book: IBook;
}

const BookCard = ({ book }: IBookCardProps) => {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl">

      {/* Book Cover */}
      <div className="relative bg-gradient-to-br from-indigo-500/10 to-violet-500/10 px-4 pt-4">

        <div className="absolute left-6 top-6 z-10">
          <span className="rounded-full bg-white/90 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-indigo-600 shadow-sm">
            Book
          </span>
        </div>

        <div className="relative h-64 w-full overflow-hidden rounded-xl bg-white shadow-md">
          <Image
            src={book.image}
            alt={book.bookName}
            fill
            className="object-contain p-5 transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw,
                   (max-width: 1024px) 50vw,
                   25vw"
          />
        </div>

        <div className="h-4" />
      </div>

      {/* Book Information */}
      <div className="flex flex-1 flex-col px-5 pb-5">

        {/* Category + Rating */}
        <div className="mb-3 flex items-center justify-between">

          <span className="rounded-full bg-indigo-50 px-2.5 py-1 text-[11px] font-semibold text-indigo-600">
            {book.category}
          </span>

          <div className="flex items-center gap-1 rounded-full bg-slate-50 px-2 py-1">
            <span className="text-xs text-amber-400">
              ★
            </span>

            <span className="text-[11px] font-bold text-slate-700">
              {book.rating}
            </span>
          </div>

        </div>

        {/* Title */}
        <h2 className="line-clamp-2 min-h-[48px] font-serif text-lg font-bold leading-6 text-slate-900 transition-colors group-hover:text-indigo-600">
          {book.bookName}
        </h2>

        {/* Author */}
        <p className="mt-1 text-xs text-slate-500">
          by{" "}
          <span className="font-medium text-slate-700">
            {book.author}
          </span>
        </p>

        <div className="my-4 h-px bg-slate-100" />

        {/* Details */}
        <div className="grid grid-cols-3 gap-1 text-center">

          <div>
            <p className="text-[9px] uppercase tracking-wider text-slate-400">
              Pages
            </p>

            <p className="mt-1 text-[11px] font-semibold text-slate-700">
              {book.totalPages}
            </p>
          </div>

          <div className="border-x border-slate-100">
            <p className="text-[9px] uppercase tracking-wider text-slate-400">
              Published
            </p>

            <p className="mt-1 text-[11px] font-semibold text-slate-700">
              {book.yearOfPublishing}
            </p>
          </div>

          <div className="min-w-0">
            <p className="text-[9px] uppercase tracking-wider text-slate-400">
              Publisher
            </p>

            <p className="mt-1 truncate text-[11px] font-semibold text-slate-700">
              {book.publisher}
            </p>
          </div>

        </div>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {book.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-[10px] text-slate-400"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Details Button */}
       <div className="mt-4 flex items-center gap-3">
  <Link
    href={`/books/${book.bookId}`}
    className="flex flex-1 items-center justify-between rounded-lg border border-slate-200 bg-indigo-50 px-3.5 py-2.5 text-xs font-semibold text-slate-700 transition-all hover:bg-slate-900 hover:text-white"
  >
    <span>View Details</span>

    <span className="text-base transition-transform group-hover:translate-x-1">
      →
    </span>
  </Link>

  <ReadButton book={book} />
</div>

      </div>
    </article>
  );
};

export default BookCard;