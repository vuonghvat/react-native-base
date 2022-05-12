import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Routes from "./Routes";
import HomeScreen from "@app/screens/home/HomeScreen"
import MainNavigator from "./MainNavigator";
import AuthNavigator from "./AuthNavigator";
import useAppHook from '@app/hooks/useAppHook';

const AppContainer = () => {
    const [token, setToken] = useState('')
    const {isLoading} = useAppHook();
    
    //You can return <SplashScreen/>
    if(isLoading) return null
    return <>
        <NavigationContainer>
            {token ? <MainNavigator /> : <AuthNavigator />}
        </NavigationContainer>
    </>
}

export default AppContainer; 