const STATUS = 'bookstore/categories/STATUS';

export default (state = [], action) => {
  switch (action.type) {
    case STATUS:
      return 'under construction';
    default:
      return state;
  }
};

export const checkStatusAction = () => ({ type: STATUS });
