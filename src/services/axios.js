import axiosInstance from 'axios';

const axios = axiosInstance.create({
  baseURL: 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/8yirTzUUgZRdu9Opt4Zx/',
});

export default axios;
