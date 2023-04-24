import { useContext, useState } from 'react';
import BookContext from '../BookContext';

function BookEdit({ book, handleShowEdit }) {
  const { editBook } = useContext(BookContext);

  const [title, setTitle] = useState(book.title);

  const onChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    editBook(title, book.id);
    handleShowEdit();
  };

  return (
    <div className='book-show'>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input value={title} onChange={onChangeHandler} className='input' />
        <button className='button is-info'>save</button>
      </form>
    </div>
  );
}

export default BookEdit;
