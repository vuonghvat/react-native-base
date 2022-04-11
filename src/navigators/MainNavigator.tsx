import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Routes from "./Routes";
import HomeScreen from "@app/screens/home/HomeScreen"
const MainStack = createNativeStackNavigator()
const MainNavigator = () => {
    return <>
        <MainStack.Navigator>
            <MainStack.Screen name={Routes.HOME} component={HomeScreen} />
        </MainStack.Navigator>
    </>
}

export default MainNavigator; 