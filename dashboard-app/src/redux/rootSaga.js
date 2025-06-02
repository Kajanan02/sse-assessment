import {all} from 'redux-saga/effects';
import {activitySaga} from './slices/activitySlice';

export default function* rootSaga() {
    yield all([activitySaga()]);
}
