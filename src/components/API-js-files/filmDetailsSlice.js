import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import API from './request';

const initialState = {
  currentFilm: {},
  isLoading: false,
  error: {},
};

export const getFilmDetails = createAsyncThunk('FilmDetails', async (id) => {
  const response = await API.get(`api/v2.2/films/${id}`);
  return response.data;
});

const filmDetailsSlice = createSlice({
  name: 'filmDetails',
  initialState,

  extraReducers: (builder) => {
    builder.addCase(getFilmDetails.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getFilmDetails.fulfilled, (state, action) => {
      state.isLoading = false;
      state.currentFilm = action.payload;
    });
    // builder.addCase(getFilmDetails.rejected, (state, action) => {
    //   state.error = action.error;
    //   state.isLoading = false;
    // });
  },
});

export default filmDetailsSlice.reducer;
