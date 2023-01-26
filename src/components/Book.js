import propsType from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBookAction } from '../redux/books/books';

const Book = (props) => {
  const { book } = props;
  const { item_id: itemId, title, author } = book;

  const dispatch = useDispatch();

  const removeBook = () => {
    dispatch(removeBookAction(itemId));
  };

  return (
    <div className="p-2">
      <h2>{title}</h2>
      <h3>{author}</h3>
      <button type="button" onClick={removeBook}>
        Remove
      </button>
    </div>
  );
};

Book.propTypes = {
  book: propsType.shape({
    item_id: propsType.string.isRequired,
    title: propsType.string.isRequired,
    author: propsType.string.isRequired,
  }).isRequired,
};

export default Book;
