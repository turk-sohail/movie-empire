import BookCreate from './components/BookCreate';
import { useEffect, useContext } from 'react';
import BookList from './components/BookList';
import BookContext from './BookContext';

//const baseUrl = ' http://localhost:3001';

function App() {
  const { fetchBooks, books } = useContext(BookContext);
  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className='app'>
      <BookList books={books} />
      <BookCreate />
    </div>
  );
}

export default App;
