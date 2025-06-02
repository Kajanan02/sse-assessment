import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import {all} from 'redux-saga/effects';
import {reducer as userStatsReducer, watchUserStats} from '../features/userStats';
import {reducer as dashboardDataReducer, watchDashboardData} from '../features/dashboardData';
import {reducer as activityLogReducer, watchActivityLog} from '../features/activityLog';


const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
    yield all([watchUserStats(), watchDashboardData(), watchActivityLog(),]);
}

const store = configureStore({
    reducer: {userStats: userStatsReducer, dashboardData: dashboardDataReducer, activityLog: activityLogReducer},
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({thunk: false}).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;
