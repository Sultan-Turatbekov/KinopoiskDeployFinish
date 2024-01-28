import { configureStore } from '@reduxjs/toolkit';
import FilmsListReducer from './components/API-js-files/filmListSlice';
import FilmDetailsReducer from './components/API-js-files/filmDetailsSlice.js';
import SearchListReducer from './components/API-js-files/searchListSlice.js';

export const store = configureStore({
  reducer: {
    filmsList: FilmsListReducer,
    filmDetails: FilmDetailsReducer,
    SearchList: SearchListReducer,
  },
});
