import { combineReducers } from "@reduxjs/toolkit";
import homeReducer from "../screens/HomeScreen/homeSlice";
import movieDetailReducer from '../screens/MovieScreen/movieSlice';
import playingMovieReducer from '../screens/HomeScreen/homeplayingSlice'
import currentMovieReducer from '../screens/MovieScreen/movieplayingSlice'
import nameReducer  from '../screens/SetNameScreen/nameSlice'


const Rootreducer = combineReducers({
    home : homeReducer,
    playingMovies: playingMovieReducer,
    movie : movieDetailReducer,
    currentMovie: currentMovieReducer,
    name : nameReducer
})

export default Rootreducer;