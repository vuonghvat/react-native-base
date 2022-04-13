import React, { useEffect, useState } from "react"
import UserApi from "../networking/apis/User";
import { shallowEqual, useSelector, useDispatch } from 'react-redux'
import { RootState } from "@app/reduxs/store";
import LoginActions from "@app/reduxs/login/actions";
export default () => {
    const {user,isLoading,error} = useSelector((state: RootState) => state.loginReducer)
    // console.log("isLoading",isLoading);
    const dispatch = useDispatch()
    const login = async (data: { username: string, password: string }) => {
        dispatch(LoginActions.loginStartAction({ ...data }))
    }
    return {
        login,
        user,
        isLoading,
        error

    }
}