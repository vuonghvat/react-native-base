import React, {ReactElement} from 'react';
import {StyleSheet, Text, TextStyle} from 'react-native';
type TextProps = {
  children?: ReactElement | any;
  style?: TextStyle | Array<TextStyle>;
};
const SemiBoldText = ({children, style}: TextProps) => {
  return <Text style={[styles.text, style]}>{children}</Text>;
};
const styles = StyleSheet.create({
  text: {
    fontSize:  16,
    // lineHeight: scale(20),
    fontWeight: '700',
  },
});
export default SemiBoldText;
