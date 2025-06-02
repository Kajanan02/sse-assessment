import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    activity: [],
    roles: [],
    authMethods: [],
    loading: false,
    error: null,
};

const dashboardDataSlice = createSlice({
    name: 'dashboardData',
    initialState,
    reducers: {
        fetchDashboardData: (state) => {
            state.loading = true;
            state.error = null;
        },
        setDashboardData: (state, action) => {
            const {activity, roles, authMethods} = action.payload;
            state.activity = activity;
            state.roles = roles;
            state.authMethods = authMethods;
            state.loading = false;
        },
        fetchDashboardDataFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});
export const {
    fetchDashboardData,
    setDashboardData,
    fetchDashboardDataFailure
} = dashboardDataSlice.actions;

export default dashboardDataSlice.reducer;
