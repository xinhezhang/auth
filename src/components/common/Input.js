import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({ label, value, onChangeText }) => {
  const { inputStyle, labelStyle, containerStyle } = styles;

  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={inputStyle}
      />
    </View>
  );
};

// Since both "Text" and "TextInput" are children of "View",
// so they are siblings to each other.
// Whenever we have siblings on the "flex" property,
// it will count total of the whole container and then apply to each of them.
// Ex:
// "inputStyle" = 2 / (1 + 2) = 2/3 of space
// "labelStyle" = 1 / (1 + 2) = 1/3 of space
const styles = {
  inputStyle: {
    color: '#000',
    paddingLeft: 5,
    paddingRight: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2,
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1,
  },
  containerStyle: {
    height: 20,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
};

export default Input;
