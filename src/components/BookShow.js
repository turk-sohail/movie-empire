import useBookContext from '../hooks/use-book-context';
import BookEdit from './BookEdit';
import { useState } from 'react';

function BookShow({ book }) {
  const { deleteBook } = useBookContext();

  const [showEdit, setShowEdit] = useState(false);

  let content = book.title;

  const handleShowEdit = () => {
    setShowEdit(!showEdit);
  };

  if (showEdit) {
    return (
      <div>
        <BookEdit book={book} handleShowEdit={handleShowEdit} />
      </div>
    );
  }
  return (
    <div className='book-show'>
      <div>{content}</div>
      <img src={`https://source.unsplash.com/random`} alt='images' />
      <div className='actions'>
        <button className='edit' onClick={handleShowEdit}>
          Edit
        </button>
        <button className='delete' onClick={() => deleteBook(book.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default BookShow;
