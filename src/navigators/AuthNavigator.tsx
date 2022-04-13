import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Routes from './Routes';
import HomeScreen from '@app/screens/home/HomeScreen';
import LoginScreen from '@app/screens/login/LoginScreen';
const AuthStack = createNativeStackNavigator();
const AuthNavigator = () => {
  return (
    <AuthStack.Navigator screenOptions={{
        headerShown: false
    }}>
        <AuthStack.Screen name={Routes.LOGIN} component={LoginScreen} />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
