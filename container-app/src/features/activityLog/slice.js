import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    logs: [],
    loading: false,
    error: null,
};

const activityLogSlice = createSlice({
    name: 'activityLog',
    initialState,
    reducers: {
        fetchActivityLog: (state) => {
            state.loading = true;
            state.error = null;
        },
        setActivityLog: (state, action) => {
            state.logs = action.payload;
            state.loading = false;
        },
        fetchActivityLogFailed: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const {
    fetchActivityLog,
    setActivityLog,
    fetchActivityLogFailed,
} = activityLogSlice.actions;

export default activityLogSlice.reducer;
