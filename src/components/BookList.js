import BookShow from './BookShow';
import useBookContext from '../hooks/use-book-context';

function BookList() {
  const { books } = useBookContext();
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
