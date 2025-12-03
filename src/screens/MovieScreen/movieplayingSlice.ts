import {
  AsyncThunk,
  createAsyncThunk,
  createSlice,
} from '@reduxjs/toolkit';
import axios from 'axios';

export const currentPlaying = createAsyncThunk('movie/nowPlaying', async () => {
    console.log('check')
  try {
    const responce = await axios.get(
      'https://api.themoviedb.org/3/movie/now_playing?api_key=d500c37cbd616546e9d07588c51f2019',
    );
    console.log('problem',responce.data)
    return responce.data;
  } catch (error) {
    console.log(error);
  }
});

const initialState = {
  movies:[],
  loading: false,
  error: null,
};

const currentMovieSlice = createSlice({
  name: 'currentMovie',
  reducers: {},
  initialState,
  extraReducers: builder => {
        builder.addCase(currentPlaying.pending, (state : any, action) => {
      state.error = false;
      state.loading = true;
    });
    builder.addCase(currentPlaying.fulfilled, (state: any, action) => {
      (state.loading = false), (state.movies = action.payload);
    });
    builder.addCase(currentPlaying.rejected, (state: any, action) => {
      state.error = true;
      state.loading = false;
    });

      },
});

export const selectCurrentplaying = (state: any) => state.currentMovie.movies;
export const selectPlayingMovieLoading = (state: any) => state.currentMovie.loading;
export const selectNowPlayingMovieError = (state: any) => state.currentMovie.error;


export default currentMovieSlice.reducer;
