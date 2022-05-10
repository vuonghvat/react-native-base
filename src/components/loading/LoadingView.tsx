import React, {ReactElement} from 'react';
import {
  Keyboard,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  ViewStyle,
  TouchableWithoutFeedback,
  ActivityIndicator,
} from 'react-native';
import PropTypes from 'prop-types';
import Colors from '../../assets/colors/Colors';

type LoadingProps = {
  children?: ReactElement | any;
  style?: ViewStyle | Array<ViewStyle>;
  color?: string;
  indicatorStyle?: ViewStyle | Array<ViewStyle>;
  size?: 'small' | 'large';
  isLoading: boolean;
};
const LoadingView = ({
  children,
  style,
  color = 'gray',
  indicatorStyle,
  size = 'small',
  isLoading = false,
}: LoadingProps) => {
  if (isLoading)
    return (
      <>
        <View style={styles.container}>
          <ActivityIndicator
            size={size}
            color={color}
            style={[styles.indicatorDefault, indicatorStyle]}
          />
        </View>
      </>
    );
  return null;
};

export default LoadingView;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  indicatorDefault: {},
});
