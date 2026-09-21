
import Image from "next/image";
import Link from "next/link";

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

        {/* ================= BOOK GRID ================= */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

          {booksData.map((book, index) => {

            const accentColors = [
              "from-indigo-500/10 to-violet-500/10",
              "from-emerald-500/10 to-teal-500/10",
              "from-amber-500/10 to-orange-500/10",
              "from-rose-500/10 to-pink-500/10",
            ];

            const accentBorders = [
              "group-hover:border-indigo-200",
              "group-hover:border-emerald-200",
              "group-hover:border-amber-200",
              "group-hover:border-rose-200",
            ];

            const accentText = [
              "text-indigo-600",
              "text-emerald-600",
              "text-amber-600",
              "text-rose-600",
            ];

            const accentBg = [
              "bg-indigo-50",
              "bg-emerald-50",
              "bg-amber-50",
              "bg-rose-50",
            ];

            const colorIndex = index % 4;

            return (
              <article
                key={book.bookId}
                className={`group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-500 ease-out hover:-translate-y-1.5 hover:shadow-[0_20px_45px_-20px_rgba(15,23,42,0.25)] ${accentBorders[colorIndex]}`}
              >

                {/* ================= BOOK COVER ================= */}
                <div
                  className={`relative bg-gradient-to-br ${accentColors[colorIndex]} px-4 pt-4`}
                >

                  {/* Book Label */}
                  <div className="absolute left-6 top-6 z-10">
                    <span
                      className={`rounded-full bg-white/90 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider shadow-sm backdrop-blur ${accentText[colorIndex]}`}
                    >
                      Book
                    </span>
                  </div>

                  {/* Cover */}
                  <div className="relative h-64 w-full overflow-hidden rounded-xl bg-white shadow-[0_10px_25px_-15px_rgba(15,23,42,0.35)]">

                    <Image
                      src={book.image}
                      alt={book.bookName}
                      fill
                      className="object-contain p-5 transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />

                  </div>

                  <div className="h-4" />
                </div>

                {/* ================= BOOK INFORMATION ================= */}
                <div className="flex flex-1 flex-col px-5 pb-5 pt-1">

                  {/* Category + Rating */}
                  <div className="mb-3 flex items-center justify-between">

                    <span
                      className={`rounded-full ${accentBg[colorIndex]} px-2.5 py-1 text-[11px] font-semibold ${accentText[colorIndex]}`}
                    >
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
                  <h2 className="line-clamp-2 min-h-[48px] font-serif text-lg font-bold leading-6 text-slate-900 transition-colors duration-300 group-hover:text-indigo-600">
                    {book.bookName}
                  </h2>

                  {/* Author */}
                  <p className="mt-1 text-xs text-slate-500">
                    by{" "}
                    <span className="font-medium text-slate-700">
                      {book.author}
                    </span>
                  </p>

                  {/* Divider */}
                  <div className="my-4 h-px bg-slate-100" />

                  {/* Book Details */}
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
                  <div className="mt-4 flex flex-wrap gap-x-2.5 gap-y-1">
                    {book.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] text-slate-400"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* View Details */}
                  <Link
                    href={`/books/${book.bookId}`}
                    className={`mt-4 flex items-center justify-between rounded-lg border border-slate-200 px-3.5 py-2.5 text-xs font-semibold text-slate-700 transition-all duration-300 hover:text-white ${accentBg[colorIndex]} hover:bg-slate-900`}
                  >
                    <span>View Details</span>

                    <span className="text-base transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </Link>

                </div>
              </article>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default Books;

