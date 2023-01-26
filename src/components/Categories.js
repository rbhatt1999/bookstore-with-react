import { useDispatch, useSelector } from 'react-redux';
import { checkStatusAction } from '../redux/categories/categories';

const Categories = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);

  const checkStatus = () => {
    dispatch(checkStatusAction());
  };

  return (
    <div className="container">
      <span>{categories}</span>
      <br />
      <button type="button" className="btn" onClick={checkStatus}>
        Check status
      </button>
    </div>
  );
};

export default Categories;
