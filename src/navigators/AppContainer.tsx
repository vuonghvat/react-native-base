import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Routes from "./Routes";
import HomeScreen from "@app/screens/home/HomeScreen"
import MainNavigator from "./MainNavigator";
import AuthNavigator from "./AuthNavigator";

const AppContainer = () => {
    const [token, setToken] = useState('')
    return <>
        <NavigationContainer>
            {token ? <MainNavigator /> : <AuthNavigator />}
        </NavigationContainer>
    </>
}

export default AppContainer; 