import React, {useEffect, useState} from "react";
import UserApi from "../networking/apis/User";
import {shallowEqual, useSelector, useDispatch} from "react-redux";
import {RootState} from "@app/app-reduxs/store";
import LoginActions from "@app/app-reduxs/login/actions";
import SplashScreen from "react-native-splash-screen";
export default () => {
  const [token, setToken] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return {
    isLoading,
    setLoading,
    setToken,
    token,
  };
};
