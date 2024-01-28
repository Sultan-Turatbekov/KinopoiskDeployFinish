import API from './request';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [],
  isLoading: false,
  error: {},
};

export const getFilms = createAsyncThunk('filmList/getFilms', async () => {
  const response = await API.get('api/v2.2/films/top', {
    params: { type: 'TOP_100_POPULAR_FILMS' },
  });
  return response.data;
});

const FilmListSlice = createSlice({
  name: 'FilmsList',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getFilms.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getFilms.fulfilled, (state, action) => {
      state.isLoading = false;
      state.list = action.payload.films;
    });
    builder.addCase(getFilms.rejected, (state, action) => {
      state.error = action.error;
      state.isLoading = false;
    });
  },
});

export default FilmListSlice.reducer;
