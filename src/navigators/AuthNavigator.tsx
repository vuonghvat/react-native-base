import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Routes from './Routes';
import  * as Screens  from '@app/screens';
const AuthStack = createNativeStackNavigator();
const AuthNavigator = () => {
  return (
    <AuthStack.Navigator screenOptions={{
        headerShown: false
    }}>
        <AuthStack.Screen name={Routes.LOGIN} component={Screens.LoginScreen} />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
