import React, {ReactElement} from 'react';
import {StyleSheet, Text, TextStyle, TextProps} from 'react-native';
interface IProps extends TextProps {
  children?: ReactElement | any;
  style?: TextStyle | Array<TextStyle>;
  onPress?: () => void;
}
const RegularText = (props: IProps) => {
  const {children, style, onPress} = props;
  return (
    <Text {...props} {...{onPress}} style={[styles.text, style]}>
      {children}
    </Text>
  );
};
const styles = StyleSheet.create({
  text: {
    fontSize:  16,
    //lineHeight: scale(20),
  },
});
export default RegularText;
