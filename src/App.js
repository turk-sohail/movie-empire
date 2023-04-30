import BookCreate from './components/BookCreate';
import { useEffect } from 'react';
import BookList from './components/BookList';
import useBookContext from './hooks/use-book-context';

//const baseUrl = ' http://localhost:3001';

function App() {
  const { fetchBooks, books } = useBookContext();
  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  return (
    <div className='app'>
      <BookList books={books} />
      <BookCreate />
    </div>
  );
}

export default App;
