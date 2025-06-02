import {call, put, takeLatest} from 'redux-saga/effects';
import {fetchUserStats, fetchUserStatsFailure, fetchUserStatsSuccess} from './slice.js';
import {userStatsData} from '../../data/data.js';
import {delay} from "../../utils/utils.js";


function* handleFetchUserStats() {
    try {
        yield call(delay, 1000);
        yield put(fetchUserStatsSuccess(userStatsData));
    } catch (error) {
        yield put(fetchUserStatsFailure(error instanceof Error ? error.message : 'Unknown error'));
    }
}

export function* watchUserStats() {
    yield takeLatest(fetchUserStats.type, handleFetchUserStats);
}
