import { useContext } from 'react';
import BookShow from './BookShow';
import BookContext from '../BookContext';

function BookList() {
  const { books } = useContext(BookContext);
  return (
    <div className='book-list'>
      {books.map((book) => (
        <div key={book.id}>
          <BookShow book={book} />
        </div>
      ))}
    </div>
  );
}

export default BookList;
