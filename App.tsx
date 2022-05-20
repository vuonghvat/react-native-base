/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from "react";
import {StyleSheet, View} from "react-native";

import {Provider} from "react-redux";
import AppContainer from "@app/navigators/AppContainer";
import store from "@app/app-reduxs/store";
import SplashScreen from "react-native-splash-screen";

const App = () => {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <AppContainer />
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
