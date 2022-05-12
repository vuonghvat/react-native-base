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

const LoginScreen = () => {
  const {login, user, setEmail, setPassword, isLoading} = useLoginUser();

  const onPress = () => {
    login();
  };

  return (
    <View style={styles.container}>
      <View style={styles.loginForm}>
        <TextInput
          onChangeText={setEmail}
          style={styles.input}
          placeholder="Email"
        />
        <TextInput
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
      {isLoading && (
        <View
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            justifyContent: "center",
            backgroundColor: "gray",
          }}>
          <ActivityIndicator />
        </View>
      )}
    </View>
  );
};

export default LoginScreen;
