import axios from 'axios';
const baseUrl = 'http://localhost:3001/books';

const createBook = async (title) => {
  const response = await axios.post(baseUrl, {
    title,
  });
  return response;
};

const fetchBooks = async () => {
  const response = await axios.get(baseUrl);
  return response;
};

const editBook = async (id, title) => {
  const response = await axios.put(`${baseUrl}/${id}`, { title });
  return response;
};

const deleteBook = async (id) => {
  const response = await axios.delete(`${baseUrl}/${id}`);
  return response;
};

const bookService = {
  createBook,
  fetchBooks,
  editBook,
  deleteBook,
};

export default bookService;
