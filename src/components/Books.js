import { useSelector } from 'react-redux';
import Book from './Book';
import AddBookForm from './AddBookForm';

const Books = () => {
  const books = useSelector((state) => state.books);

  return (
    <div>
      {books.map((book) => (
        <Book key={book.id} book={book} />
      ))}
      <AddBookForm />
    </div>
  );
};

export default Books;
