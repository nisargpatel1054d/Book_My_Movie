import { configureStore } from '@reduxjs/toolkit';
import Rootreducer from './reducer';

const store = configureStore({
    reducer: Rootreducer
})

export default store;