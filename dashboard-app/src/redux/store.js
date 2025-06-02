import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import activityReducer from './slices/activitySlice';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: {
        activity: activityReducer,
    },
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);
