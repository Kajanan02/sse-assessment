import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    stats: [],
    loading: false,
    error: null
};

const userStatsSlice = createSlice({
    name: 'userStats',
    initialState,
    reducers: {
        fetchUserStats: (state) => {
            state.loading = true;
            state.error = null;
        },
        fetchUserStatsSuccess: (state, action) => {
            state.stats = action.payload;
            state.loading = false;
        },
        fetchUserStatsFailure: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },
    }
});

export const {
    fetchUserStats,
    fetchUserStatsSuccess,
    fetchUserStatsFailure
} = userStatsSlice.actions;

export default userStatsSlice.reducer;
