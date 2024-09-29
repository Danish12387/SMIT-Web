import { configureStore } from '@reduxjs/toolkit'
import courseSlice from './courseSlice';

export const store = configureStore({
    reducer: {
        courses: courseSlice
    },
});