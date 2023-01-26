import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBookAction } from '../redux/books/books';

const AddBookForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const changeTitle = (event) => {
    setTitle(event.target.value);
  };

  const changeAuthor = (event) => {
    setAuthor(event.target.value);
  };

  const dispatch = useDispatch();

  const submitHandler = (event) => {
    event.preventDefault();
    if (title.trim() !== '' && author.trim() !== '') {
      const id = uuidv4();
      dispatch(
        addBookAction({
          item_id: id,
          title,
          author,
          category: 'Fiction',
        }),
      );
      setTitle('');
      setAuthor('');
    }
  };

  return (
    <form className="book-form" onSubmit={submitHandler}>
      <input type="text" name="title" className="input-title" placeholder="Book title" onChange={changeTitle} value={title} />
      <input type="text" name="author" className="input-author" placeholder="Book author" onChange={changeAuthor} value={author} />
      <button type="submit" className="btn book-button">ADD BOOK</button>
    </form>
  );
};

export default AddBookForm;
