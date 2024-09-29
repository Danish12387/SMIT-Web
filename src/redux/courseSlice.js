import { createSlice } from '@reduxjs/toolkit';

const courseSlice = createSlice({
    name: 'courses',
    initialState: {
        courses: null,
    },
    reducers: {
        setCourse: (state, action) => {
            state.courses = action.payload;
        },
    }
})

export const { setCourse } = courseSlice.actions;
export default courseSlice.reducer;