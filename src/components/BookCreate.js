import { useState } from 'react';
import useBookContext from '../hooks/use-book-context';

function BookCreate({ onCreate }) {
  const { createBook } = useBookContext();

  const [title, setTitle] = useState('');

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createBook(title);
    setTitle('');
  };

  return (
    <div className='book-create'>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input value={title} onChange={handleChange} className='input' />
        <button className='button is-info'>Create!</button>
      </form>
    </div>
  );
}

export default BookCreate;
