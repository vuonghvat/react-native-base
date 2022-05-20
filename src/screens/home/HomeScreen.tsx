import {SimpleButton} from "@app/components";
import useHomeHook from "@app/hooks/useHomeHook";
import React from "react";
import {StyleSheet} from "react-native";
import {View} from "react-native";

import styles from "./styles";
const HomeScreen = () => {
  const {logout} = useHomeHook();
  return (
    <View style={styles.container}>
      <SimpleButton
        style={{
          height:50,
          backgroundColor:"red",
          alignSelf:"center"
        }}
        title="logout"
        onPress={() => {
          logout();
        }}
      />
    </View>
  );
};

export default HomeScreen;
