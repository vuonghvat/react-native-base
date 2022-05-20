import LoginActions, {LOGIN_START} from './actions';
import {all, call, put, takeLatest} from 'redux-saga/effects';
import UserApi from '@app/networking/apis/User';
import {AxiosResponse} from 'axios';
import AppActions from '../app/actions';

function * saveDataUser(data:any){
  //save to storage
}
function* login(action: any) {
  try{
    console.log("ACtion", action);
    
    const res: AxiosResponse = yield UserApi.login({...action.data});
    yield call(saveDataUser,'')
    yield put(LoginActions.loginSuccessAction(res))
    const access_token = "your access_token"
    yield put(AppActions.saveTokenAction(access_token))
  }catch(err){
    yield put(LoginActions.loginErrorAction(err))
  }

}
export default function* loginSaga() {
  yield all([takeLatest(LOGIN_START, login)]);
}
