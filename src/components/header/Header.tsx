import {DrawerActions, useNavigation} from '@react-navigation/core';
import React, {ReactElement} from 'react';
import {
  Platform,
  StatusBar,
  StatusBarStyle,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import Colors from '../../assets/colors/Colors';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
// import {
//   horizontalScale,
//   moderateScale,
//   scale,
//   verticalScale,
// } from '../../assets/dimens';

type HeaderProps = {
  showIconLeft?: boolean;
  showIconRight?: boolean;
  renderLeft?: ReactElement;
  renderRight?: ReactElement;
  title?: string;
  titleStyle?: TextStyle;
  styleContainer?: ViewStyle;
  styleViewCenter?: ViewStyle;
  onRightPress?: () => void;
  onLeftPress?: () => void;
  leftIcon?: ReactElement | any;
  rightIcon?: ReactElement | any;
  containerLeftStyle?: ViewStyle;
  statusBarStyle?: null | StatusBarStyle | undefined;
  statusBarColor?: string;
};
export default ({
  showIconLeft = true,
  showIconRight = true,
  leftIcon,
  rightIcon,
  title,
  titleStyle = {},
  styleContainer,
  styleViewCenter,
  onRightPress,
  onLeftPress,
  containerLeftStyle,
  statusBarStyle,
  statusBarColor,
}: HeaderProps) => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  return (
    <>
      <StatusBar
        translucent
        backgroundColor={'transparent'}
        barStyle={statusBarStyle || 'light-content'}
        // backgroundColor={statusBarColor || Colors.Cobalt}
      />
      <View
        style={[
          styles.container,
          {
            paddingTop: insets.top,
            height:
              18 +
              insets.top +
              (Platform.OS === 'android' ? 20 : 0),
          },
          styleContainer,
        ]}>
        <TouchableOpacity
          onPress={() => {
            if (onLeftPress) {
              onLeftPress();
              return;
            }
            navigation.dispatch(DrawerActions.toggleDrawer());
          }}>
          {showIconLeft && <View style={styles.iconContainer}>{leftIcon}</View>}
        </TouchableOpacity>

        <View
          style={[
            {
              flex: 1,
              backgroundColor: Colors.blue,
              justifyContent: 'center',
              alignItems: 'center',
            },
            styleViewCenter,
          ]}>
          <Text numberOfLines={1} style={[styles.titleStyle, titleStyle]}>
            {title}
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            if (onRightPress) {
              onRightPress();
              return;
            }
          }}>
          {showIconRight && (
            <View style={[styles.iconContainer, containerLeftStyle]}>
              {rightIcon}
            </View>
          )}
        </TouchableOpacity>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingBottom: 5,
    backgroundColor: Colors.black,
    flexDirection: 'row',
  },
  titleStyle: {
    fontSize: 15,
    color: Colors.white,
  },
  iconContainer: {
    height: '100%',
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
