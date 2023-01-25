import { useDispatch, useSelector } from 'react-redux';
import { checkStatusAction } from '../redux/categories/categories';

const Categories = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);

  const checkStatus = () => {
    dispatch(checkStatusAction());
  };

  return (
    <div className="p-2">
      <span>{categories}</span>
      <br />
      <button type="button" onClick={checkStatus}>
        Check status
      </button>
    </div>
  );
};

export default Categories;
