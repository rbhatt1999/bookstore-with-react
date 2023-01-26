import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../services/axios';

const LIST_BOOKS = 'bookstore/books/LIST_BOOKS';
const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

export default (state = [], action) => {
  switch (action.type) {
    case `${LIST_BOOKS}/fulfilled`:
      return action.payload;

    case `${ADD_BOOK}/fulfilled`:
      return [...state, action.payload];

    case `${REMOVE_BOOK}/fulfilled`:
      return [...state.filter((book) => book.item_id.toString()
        !== action.payload.toString())];

    default:
      return state;
  }
};

export const getBooksAction = createAsyncThunk(LIST_BOOKS, async () => {
  const response = await axios.get('books');
  const data = Object.keys(response.data).map((book) => ({
    item_id: book,
    ...response.data[book][0],
  }));
  return data;
});

export const addBookAction = createAsyncThunk(ADD_BOOK, async (book) => {
  await axios.post('books', book);
  return book;
});

export const removeBookAction = createAsyncThunk(REMOVE_BOOK, async (bookId) => {
  await axios.delete(`books/${bookId}`);
  return bookId;
});
