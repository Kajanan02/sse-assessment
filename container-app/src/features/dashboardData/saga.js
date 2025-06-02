import {call, put, takeLatest} from 'redux-saga/effects';
import {authMethods, userActivity, userData} from '../../data/data';
import {fetchDashboardData, fetchDashboardDataFailure, setDashboardData} from "./slice.js";
import {delay} from "../../utils/utils.js";


function* handleFetchDashboardData() {
    try {
        yield call(delay, 1000);
        yield put(setDashboardData({
            activity: userActivity,
            roles: userData,
            authMethods
        }));
    } catch (error) {
        yield put(fetchDashboardDataFailure(error instanceof Error ? error.message : 'Unknown error'));
    }
}

export function* watchDashboardData() {
    yield takeLatest(fetchDashboardData.type, handleFetchDashboardData);
}
