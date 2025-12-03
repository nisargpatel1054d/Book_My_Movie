import {
  AsyncThunk,
  createAsyncThunk,
  createSlice,
} from '@reduxjs/toolkit';
import axios from 'axios';

export const nowPlaying = createAsyncThunk('movie/nowPlaying', async () => {
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

const playingMovieSlice = createSlice({
  name: 'movies',
  reducers: {},
  initialState,
  extraReducers: builder => {
        builder.addCase(nowPlaying.pending, (state : any, action) => {
      state.error = false;
      state.loading = true;
    });
    builder.addCase(nowPlaying.fulfilled, (state: any, action) => {
      (state.loading = false), (state.movies = action.payload);
    });
    builder.addCase(nowPlaying.rejected, (state: any, action) => {
      state.error = true;
      state.loading = false;
    });

      },
});

export const selectNowplaying = (state: any) => state.playingMovies.movies;
export const selectNowPlayingMovieLoading = (state: any) => state.playingMovies.loading;
export const selectNowPlayingMovieError = (state: any) => state.playingMovies.error;


export default playingMovieSlice.reducer;
