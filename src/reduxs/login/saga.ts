import {LOGIN_START} from './actions';
import {all, takeLatest} from 'redux-saga/effects';
import UserApi from '@app/networking/apis/User';
import {AxiosResponse} from 'axios';

function* login(action: any) {
  const res: AxiosResponse = yield UserApi.login({...action});
}
export default function* loginSaga() {
  yield all([takeLatest(LOGIN_START, login)]);
}
