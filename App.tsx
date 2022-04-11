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

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import useLoginUser from './src/hooks/useLoginUser';
import LoginScreen from './src/screens/login/LoginScreen';



const App: () => Node = () => {

  return (
    <View style={{
      flex: 1
    }}>
      <LoginScreen />
    </View>
  );
};

const styles = StyleSheet.create({

});

export default App;
