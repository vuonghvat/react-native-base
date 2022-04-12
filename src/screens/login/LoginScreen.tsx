

import React, { useEffect } from 'react';
import type { Node } from 'react';
import {
  ActivityIndicator,
  Alert,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import useLoginUser from '@app/hooks/useLoginUser';
import makeActionCreator from '@app/reduxs/actionMaker';



const LoginScreen: () => Node = () => {
  const userHook = useLoginUser()

  const login = async () => {
    const data = {
      username: "test",
      password: "test"
    }
    userHook.login(data)
  }
  useEffect(() => {
    if (userHook.userData) {
      Alert.alert("login success")
    }


  }, [userHook.userData])


  const onPress = () => {
    login()
  }
  return (
    <View style={styles.container}>
      <View style={styles.loginForm}>
        <TextInput style={styles.input} placeholder='Email' />
        <TextInput secureTextEntry style={styles.input} placeholder='Password' />
        <TouchableOpacity {...{ onPress }} style={styles.buttonContainer}>
          <Text style={styles.loginTextButton}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  loginForm: {
    justifyContent: "center",
    alignItems: "center",
    width: "80%",

  },
  input: {
    height: 40,
    width: "100%",
    borderRadius: 20,
    backgroundColor: "gray",
    marginTop: 10,
    paddingHorizontal: 20

  },
  loginTextButton: {
    color: "white",
    textAlign: "center"
  },
  buttonContainer: {
    width: "100%",
    backgroundColor: "red",
    justifyContent: "center",
    height: 40,
    marginTop: 15,
    borderRadius: 20,
    paddingHorizontal: 10
  }
});

export default LoginScreen;
