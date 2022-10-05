import { createSlice } from '@reduxjs/toolkit';

export const countSlice = createSlice({
    name: 'count',
    initialState: 0,
    reducers: {
        countPlus: (state, action) => {
            return state + 1
        },
        countMinus: (state, action) => {
            if (state > 0) {
                return state - 1
            }
        }
    }
})

export const { countPlus, countMinus } = countSlice.actions;

export default countSlice.reducer;
