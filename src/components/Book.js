import propsType from 'prop-types';

const Book = (props) => {
  const { title, author } = props;
  return (
    <div className="p-2">
      <h2>{title}</h2>
      <h3>{author}</h3>
    </div>
  );
};

Book.propTypes = {
  title: propsType.string.isRequired,
  author: propsType.string.isRequired,
};

export default Book;
