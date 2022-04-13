import LoginActions, {LOGIN_START} from './actions';
import {all, put, takeLatest} from 'redux-saga/effects';
import UserApi from '@app/networking/apis/User';
import {AxiosResponse} from 'axios';

function* login(action: any) {
  try{
    console.log("ACtion", action);
    
    const res: AxiosResponse = yield UserApi.login({...action});
    yield put(LoginActions.loginSuccessAction(res))
    yield put(LoginActions.loginSuccessAction(null))
  }catch(err){
    yield put(LoginActions.loginErrorAction(err))
  }

}
export default function* loginSaga() {
  yield all([takeLatest(LOGIN_START, login)]);
}
