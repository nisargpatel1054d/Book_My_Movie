import {AsyncThunk, createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

export const commingSoonMovie = createAsyncThunk(
  'movie/commingSoonMovies',
  async () => {
    console.log('check');
    try {
      const responce = await axios.get(
        'https://api.themoviedb.org/3/movie/upcoming?api_key=d500c37cbd616546e9d07588c51f2019',
      );
      console.log('problem', responce.data);
      return responce.data;
    } catch (error) {
      console.log(error);
    }
  },
);

const initialState = {
  movie: [],
  loading: false,
  error: null,
};

const movieDetailSlice = createSlice({
  name: 'movies',
  reducers: {},
  initialState,
  extraReducers: builder => {
    builder.addCase(commingSoonMovie.pending, (state: any, action) => {
      state.error = false;
      state.loading = true;
    });
    builder.addCase(commingSoonMovie.fulfilled, (state: any, action) => {
      (state.loading = false), (state.movie = action.payload);
    });
    builder.addCase(commingSoonMovie.rejected, (state: any, action) => {
      state.error = true;
      state.loading = false;
    });
  },
});

export const selectMovie = (state: any) => state.movie.movie;
export const selectLoading = (state: any) => state.movie.loading;
export const selectError = (state: any) => state.movie.error;

export default movieDetailSlice.reducer;
