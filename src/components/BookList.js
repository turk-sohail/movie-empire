import BookShow from './BookShow';

function BookList({ books, onEditBook, onDelete }) {
  const handleChange = (title, id) => {
    onEditBook(title, id);
  };

  const renderedBooks = books.map((book) => {
    return (
      <BookShow
        key={book.id}
        book={book}
        handleChange={handleChange}
        onDelete={onDelete}
      />
    );
  });

  return <div className='book-list'>{renderedBooks}</div>;
}

export default BookList;
