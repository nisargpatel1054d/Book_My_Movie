import {AsyncThunk, createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchMovie = createAsyncThunk('movie/fetchMovies', async () => {
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
});

const initialState = {
  movie: [],
  loading: false,
  error: null,
};

const movieSlice = createSlice({
  name: 'movies',
  reducers: {},
  initialState,
  extraReducers: builder => {
    builder.addCase(fetchMovie.pending, (state: any, action) => {
      state.error = false;
      state.loading = true;
    });
    builder.addCase(fetchMovie.fulfilled, (state: any, action) => {
      (state.loading = false), (state.movie = action.payload);
    });
    builder.addCase(fetchMovie.rejected, (state: any, action) => {
      state.error = true;
      state.loading = false;
    });
  },
});

export const selectMovieList = (state: any) => state.home.movie;
export const selectMovieLoading = (state: any) => state.home.loading;
export const selectMovieError = (state: any) => state.home.error;

export default movieSlice.reducer;
