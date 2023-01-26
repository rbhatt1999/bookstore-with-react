import propsType from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBookAction } from '../redux/books/books';

const Book = (props) => {
  const { book } = props;
  const {
    item_id: itemId,
    title,
    author,
    category,
  } = book;

  const dispatch = useDispatch();

  const removeBook = () => {
    dispatch(removeBookAction(itemId));
  };

  return (
    <div className="card w-full bg-white text-black">
      <span className="theme-height opacity-5 text-sm font-montserrat font-bold">{category}</span>
      <h2 className="book-title font-roboto-slab font-bold font-lg">{title}</h2>
      <h3 className="theme-height text-sm text-blue font-roboto-slab font-light">{author}</h3>
      <div className="actions">
        <button type="button" onClick={() => {}} className="btn-link">
          Comments
        </button>
        <span className="v-line" />
        <button type="button" onClick={removeBook} className="btn-link">
          Remove
        </button>
        <span className="v-line" />
        <button type="button" onClick={() => {}} className="btn-link">
          Edit
        </button>
      </div>
    </div>
  );
};

Book.propTypes = {
  book: propsType.shape({
    item_id: propsType.string.isRequired,
    title: propsType.string.isRequired,
    author: propsType.string.isRequired,
    category: propsType.string.isRequired,
  }).isRequired,
};

export default Book;
