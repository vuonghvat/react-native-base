import React, { useEffect, useState } from "react"
import UserApi from "../networking/apis/User";
import { shallowEqual, useSelector, useDispatch } from 'react-redux'
import { RootState } from "@app/reduxs/store";
import LoginActions from "@app/reduxs/login/actions";
export default () => {
    const userData = useSelector((state: RootState) => state.loginReducer.user)
    const dispatch = useDispatch()
    const login = async (data: { username: string, password: string }) => {
        dispatch(LoginActions.loginStartAction({ ...data }))
    }
    return {
        login,
        userData

    }
}