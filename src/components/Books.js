import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Book from './Book';
import AddBookForm from './AddBookForm';
import { getBooksAction } from '../redux/books/books';

const Books = () => {
  const books = useSelector((state) => state.books);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooksAction());
  }, [dispatch]);

  return (
    <div className="container mt-2.3">
      <div className="books-list">
        {books.map((book) => (
          <Book key={book.item_id} book={book} />
        ))}
      </div>
      <hr className="separator" />
      <h2 className="form-title">ADD NEW BOOK</h2>
      <AddBookForm />
    </div>
  );
};

export default Books;
