import {applyMiddleware, combineReducers, createStore} from 'redux';
import {all, call, put, takeEvery, takeLatest} from 'redux-saga/effects';
import appReducer from '@app/app-reduxs/app/reducer';
import loginReducer from '@app/app-reduxs/login/reducer';
import createSagaMiddleware from 'redux-saga';
import loginSaga from './login/saga';
const sagaMiddleWare = createSagaMiddleware();

function* rootSaga() {
  yield all([loginSaga()]);
  // code after all-effect
}
const rootReducers = combineReducers({
  appReducer,
  loginReducer,
});

function logger({getState}: {getState: any}) {
  return (next: (arg0: any) => any) => (action: any) => {
    console.log('will dispatch:', action);
    const returnValue = next(action);
    console.log('state after dispatch:', getState());
    return returnValue;
  };
}

const store = createStore(
  rootReducers,
  applyMiddleware(sagaMiddleWare, logger),
);
sagaMiddleWare.run(rootSaga);

export type RootState = ReturnType<typeof rootReducers>;
export default store;
