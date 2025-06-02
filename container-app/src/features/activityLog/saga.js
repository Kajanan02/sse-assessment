import {call, put, takeLatest} from 'redux-saga/effects';
import {fetchActivityLog, fetchActivityLogFailed, setActivityLog} from './slice';
import {activityLogs} from "../../data/data.js";
import {delay} from "../../utils/utils.js";

function* handleFetchActivityLog() {
    try {
        yield call(delay, 1000);
        yield put(setActivityLog(activityLogs));
    } catch (err) {
        yield put(fetchActivityLogFailed(err.message || 'Something went wrong'));
    }
}

export function* watchActivityLog() {
    yield takeLatest(fetchActivityLog.type, handleFetchActivityLog);
}
