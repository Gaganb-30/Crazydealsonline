import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";

export interface Book{
  id : number         
  title : string
  publisher : string
  language :  string
  price : number
  available : boolean
  about : string
  format : string
  isbn  : string
  pages : number
  country : string
}

// Single book hook
export const useBook = ({ id }: { id: string }) => {
  const [loading, setLoading] = useState(true);
  const [book, setBook] = useState<Book>();

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const res = await axios.get(`${BACKEND_URL}/books/${id}`, {
          headers: {
            Authorization: localStorage.getItem("token") || "",
          },
        });
        setBook(res.data.book);
      } catch (err) {
        console.error("Failed to fetch book:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchBook();
  }, [id]);

  return { loading, book };
};


export interface Books{
  id : number;
  title : string;
  price : number,
  available : boolean,
}
export const useBooks = () => {
  const [loading, setLoading] = useState(true);
  const [books, setBooks] = useState<Books[]>([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await axios.get(`${BACKEND_URL}/books`, {
          headers: {
            Authorization: localStorage.getItem("token") || "",
          },
        });
        console.log("Books API response:", res);
        setBooks(res.data.books || []);
      } catch (err) {
        console.error("Failed to fetch blogs:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchBooks();
  }, []);

  return { loading, books };
};