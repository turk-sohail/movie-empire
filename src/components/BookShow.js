import BookEdit from './BookEdit';
import { useState } from 'react';

function BookShow({ book, handleChange, onDelete }) {
  const [showEdit, setShowEdit] = useState(false);
  let content = book.title;

  const onEditBook = (title, id) => {
    handleChange(title, book.id);
  };

  const handleShowEdit = () => {
    setShowEdit(!showEdit);
  };

  const handleDeleteBook = () => {
    onDelete(book.id);
  };

  if (showEdit) {
    return (
      <div>
        <BookEdit
          book={book}
          onChange={onEditBook}
          handleShowEdit={handleShowEdit}
        />
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
        <button className='delete' onClick={() => handleDeleteBook()}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default BookShow;
