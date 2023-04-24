import { useState } from 'react';
import BookCreate from './components/BookCreate';
import { useEffect } from 'react';
import bookService from './services';
import BookList from './components/BookList';

//const baseUrl = ' http://localhost:3001';

function App() {
  const [books, setBooks] = useState([]);

  const handleBookCreate = async (title) => {
    const book = await bookService.createBook(title);
    const updatedBooks = [...books, book];
    setBooks(updatedBooks);
  };

  const onEditBook = async (title, id) => {
    const response = await bookService.editBook(id, title);
    const editedBooks = books.map((book) => {
      return book.id !== id ? book : { ...book, ...response.data };
    });
    setBooks(editedBooks);
  };

  const fetchBooks = async () => {
    const books = await bookService.fetchBooks();
    setBooks(books.data);
  };

  const onDeleteBook = async (id) => {
    await bookService.deleteBook(id);
    const newBooks = books.filter((book) => book.id !== id);
    setBooks(newBooks);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div>
      <div className='content'>
        <h1 className='title is-1'>book list</h1>
        <BookList
          books={books}
          onEditBook={onEditBook}
          onDelete={onDeleteBook}
        />
      </div>
      <div>
        <BookCreate onCreate={handleBookCreate} />
      </div>
    </div>
  );
}

export default App;
