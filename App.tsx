/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

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
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import { Provider } from 'react-redux'
import AppContainer from '@app/navigators/AppContainer';
import store from '@app/reduxs/store';
import LoginScreen from '@app/screens/login/LoginScreen';



const App: () => Node = () => {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <AppContainer />
        {/* <LoginScreen /> */}
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;
