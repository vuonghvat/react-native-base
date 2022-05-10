import React, {ReactElement} from 'react';
import {StyleSheet, Text, TextStyle} from 'react-native';
type TextProps = {
  children?: ReactElement | any;
  style?: TextStyle | Array<TextStyle>;
  onPress?: () => void;
};
const MediumText = ({children, style, onPress}: TextProps) => {
  return (
    <Text {...{onPress}} style={[styles.text, style]}>
      {children}
    </Text>
  );
};
const styles = StyleSheet.create({
  text: {
    fontSize: 15,
    // lineHeight: scale(20),
  },
});
export default MediumText;
