import React from "react";
import {
  ActivityIndicator,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import useLoginUser from "@app/hooks/useLoginUser";
import styles from "./styles";
import Storage from "@app/utils/storage";
import {log} from "@app/utils/log";
import { Input, LoadingView } from "@app/components";

const LoginScreen = () => {
  const {login, user, setEmail, setPassword, isLoading} = useLoginUser();

  const onPress = () => {
    login();
  };

  return (
    <View style={styles.container}>
      <View style={styles.loginForm}>
      <Input
          onChangeText={setEmail}
          style={styles.input}
          placeholder="Email"
          placeholderTextColor={"white"}
        />
        <Input
          onChangeText={setPassword}
          secureTextEntry
          style={styles.input}
          placeholder="Password"
          placeholderTextColor={"white"}
        />
        <TouchableOpacity {...{onPress}} style={styles.buttonContainer}>
          <Text style={styles.loginTextButton}>Login</Text>
        </TouchableOpacity>
      </View>
        <LoadingView isLoading ={isLoading} />
    </View>
  );
};

export default LoginScreen;
