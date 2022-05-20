import makeActionCreator from '@app/app-reduxs/actionMaker';
export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export const loginStartAction = makeActionCreator(
  LOGIN_START,
  'data',
);
export const loginSuccessAction = makeActionCreator(LOGIN_SUCCESS, 'data');
export const loginErrorAction = makeActionCreator(LOGIN_ERROR, 'data');

const LoginActions = {
  loginStartAction,
  loginSuccessAction,
  loginErrorAction,
};
export default LoginActions;
