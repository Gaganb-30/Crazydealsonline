import Navbar from "../components/Navbar";
import Info from "../components/Info";
import Footer from "../components/Footer";
import Book from "../components/Book";
import { useBooks } from "../hooks";

const HomePage = () => {
  const { books, loading } = useBooks();
  if (loading) {
    return <div>Loading</div>;
  }
  if (!books.length) return <div>No books available.</div>;
  return (
    <div>
      <Navbar />
      <Info />
      <div className="bg-amber-900 p-4">
        <div className="text-center font-semibold text-4xl">Featured Books</div>
        <div className="">
          {books.map((book) => {
            return <Book title={book.title}></Book>;
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
