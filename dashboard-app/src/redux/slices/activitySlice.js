import {createSlice} from '@reduxjs/toolkit';
import {delay, put, takeLatest} from 'redux-saga/effects';

const initialState = {
    userStats: [],
    roles: [],
};

const activitySlice = createSlice({
    name: 'activity',
    initialState,
    reducers: {
        setUserStats: (state, action) => {
            state.userStats = action.payload;
        },
        setRoles: (state, action) => {
            state.roles = action.payload;
        },
        fetchDashboardData: () => {
        },
    },
});

export const {setUserStats, setRoles, fetchDashboardData} = activitySlice.actions;
export default activitySlice.reducer;

// Sagas
function* fetchDataSaga() {
    yield delay(500); // Simulate API delay
    yield put(setUserStats([10, 30, 25, 40, 35]));
    yield put(setRoles([
        {name: 'Admin', value: 10},
        {name: 'User', value: 30},
        {name: 'Guest', value: 5},
    ]));
}

export function* activitySaga() {
    yield takeLatest(fetchDashboardData.type, fetchDataSaga);
}
