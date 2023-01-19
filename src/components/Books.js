import Book from './Book';
import AddBookForm from './AddBookForm';

const Books = () => (
  <div>
    <Book title="The Alchemist" author="Paulo Coelho" />
    <Book title="The Kite Runner" author="Khalid Husseni" />

    <AddBookForm />
  </div>
);

export default Books;
