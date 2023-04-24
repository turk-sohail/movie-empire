import { createContext } from 'react';
import { useState } from 'react';
import bookService from './services';
const BookContext = createContext();

const Provider = ({ children }) => {
  const [books, setBooks] = useState([]);

  const createBook = async (title) => {
    const response = await bookService.createBook(title);
    const updatedBooks = [...books, response.data];
    setBooks(updatedBooks);
  };

  const editBook = async (title, id) => {
    const response = await bookService.editBook(id, title);
    const editedBooks = books.map((book) => {
      return book.id !== id ? book : { ...book, ...response.data };
    });
    setBooks(editedBooks);
  };

  const fetchBooks = async () => {
    const response = await bookService.fetchBooks();
    setBooks(response.data);
  };

  const deleteBook = async (id) => {
    await bookService.deleteBook(id);
    const newBooks = books.filter((book) => book.id !== id);
    setBooks(newBooks);
  };

  const data = {
    createBook,
    editBook,
    deleteBook,
    fetchBooks,
    books,
  };
  return <BookContext.Provider value={data}>{children}</BookContext.Provider>;
};

export { Provider };
export default BookContext;
