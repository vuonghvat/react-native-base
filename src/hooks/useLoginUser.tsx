import React, {useEffect, useState} from 'react';
import UserApi from '../networking/apis/User';
import {shallowEqual, useSelector, useDispatch} from 'react-redux';
import {RootState} from '@app/app-reduxs/store';
import LoginActions from '@app/app-reduxs/login/actions';
export default () => {
  const {user, isLoading, error} = useSelector(
    (state: RootState) => state.loginReducer,
  );
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const login = async () => {
    dispatch(LoginActions.loginStartAction({email,password}));
  };
  
  return {
    login,
    isLoading,
    error,
    email,
    setEmail,
    password,
    setPassword,
    user,
  };
};
