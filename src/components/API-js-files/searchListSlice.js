import API from './request';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchData: [],
  searchIsLoading: false,
  error: {},
};

export const getFilmsBySearch = createAsyncThunk(
  'searchList/getFilmsByKeyWord',
  async (search) => {
    console.log(search);
    try {
      const response = await API.get('api/v2.1/films/search-by-keyword', {
        params: { keyword: search },
      });
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);

const SearchListSlice = createSlice({
  name: 'SearchList',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getFilmsBySearch.pending, (state) => {
      state.searchIsLoading = true;
    });
    builder.addCase(getFilmsBySearch.fulfilled, (state, action) => {
      state.searchIsLoading = false;
      state.searchData = action.payload.films;
    });
    builder.addCase(getFilmsBySearch.rejected, (state, action) => {
      state.error = action.error;
      state.searchIsLoading = false;
    });
  },
});

export default SearchListSlice.reducer;
