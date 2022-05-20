import React, {useEffect, useState} from "react";
import UserApi from "../networking/apis/User";
import {shallowEqual, useSelector, useDispatch} from "react-redux";
import {RootState} from "@app/app-reduxs/store";
import LoginActions from "@app/app-reduxs/login/actions";
import SplashScreen from "react-native-splash-screen";
import AppActions from "@app/app-reduxs/app/actions";
export default () => {
    const dispatch = useDispatch()
  const logout = () => {
    dispatch(AppActions.saveTokenAction(null))
  };
  useEffect(() => {}, []);

  return {
    logout,
  };
};
