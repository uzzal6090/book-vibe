import BookCard from "@/components/shared/BookCard";
import { IBook } from "@/types/books.type";

const getBooks = async (): Promise<IBook[]> => {
  const response = await fetch(
    "http://localhost:3000/booksData.json"
  );

  if (!response.ok) {
    throw new Error("Failed to fetch books");
  }

  return response.json();
};

const Books = async () => {
  const booksData = await getBooks();

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {booksData.map((book) => (
          <BookCard
            key={book.bookId}
            book={book}
          />
        ))}
      </div>
    </section>
  );
};

export default Books;