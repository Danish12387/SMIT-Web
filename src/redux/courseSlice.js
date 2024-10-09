import { createSlice } from '@reduxjs/toolkit';

const courseSlice = createSlice({
    name: 'courses',
    initialState: {
        courses: null,
        loading: true,
    },
    reducers: {
        setCourse: (state, action) => {
            state.courses = action.payload;
        },
        setLoading: (state) => {
            state.loading = false;
        },
    }
})

export const { setCourse, setLoading } = courseSlice.actions;
export default courseSlice.reducer;