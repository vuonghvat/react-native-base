import React, {useEffect} from 'react';
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
import { useSelector } from 'react-redux';
import { RootState } from '@app/reduxs/store';

const LoginScreen = () => {
 const {login} = useLoginUser();
 const {user,isLoading,error} = useSelector((state: RootState) => state.loginReducer)
  
  useEffect(() => {
    if (user) {
      Alert.alert('login success');
    }
  }, [user]);

  const onPress = () => {
    const data = {
      username: 'test',
      password: 'test',
    };
    login(data);
  };
  console.log("run");
  
  return (
    <View style={styles.container}>
      <View style={styles.loginForm}>
        <TextInput style={styles.input} placeholder="Email" />
        <TextInput
          secureTextEntry
          style={styles.input}
          placeholder="Password"
          placeholderTextColor={"white"}
        />
        <TouchableOpacity {...{onPress}} style={styles.buttonContainer}>
          <Text style={styles.loginTextButton}>Login</Text>
        </TouchableOpacity>
      </View>
      {isLoading &&  <View style={{position:"absolute", height:"100%", width:"100%", justifyContent:"center", backgroundColor:"gray"}}>
          <ActivityIndicator /> 
      </View>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginForm: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
  },
  input: {
    height: 40,
    width: '100%',
    borderRadius: 20,
    backgroundColor: 'gray',
    marginTop: 10,
    paddingHorizontal: 20,
  },
  loginTextButton: {
    color: 'white',
    textAlign: 'center',
  },
  buttonContainer: {
    width: '100%',
    backgroundColor: 'red',
    justifyContent: 'center',
    height: 40,
    marginTop: 15,
    borderRadius: 20,
    paddingHorizontal: 10,
  },
});

export default LoginScreen;
