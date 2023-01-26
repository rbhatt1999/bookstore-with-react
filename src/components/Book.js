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

  const percentage = Math.floor(Math.random() * (100 - (0)) + (0));

  return (
    <div className="card w-full bg-white text-black">
      <div className="details-container">
        <span className="book-category">{category}</span>
        <h2 className="book-title">{title}</h2>
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
      <div className="card-left-container">
        <div className="progress-bar">
          <div className="circular-progress" />
          <div>
            <h3>{`${percentage}%`}</h3>
            <p>Completed</p>
          </div>
        </div>
        <div style={{
          borderLeft: '2px solid #e8e8e8', width: '2px', height: '50%', alignSelf: 'center',
        }}
        />
        <div className="progess-details">
          <div>
            <p className="current-chapter-label">CURRENT CHAPTER</p>
            <p className="current-chapter-name">{`Chapter ${(percentage > 30) ? Math.floor(percentage / 2) : percentage}`}</p>
          </div>
          <button className="primary-button" type="button">UPDATE PROGRESS</button>

        </div>
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
