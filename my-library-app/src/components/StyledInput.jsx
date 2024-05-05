import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import { globalStyles } from '../styles/styles';

const StyledInput = ({ value, onChangeText, placeholder }) => {
  return (
    <TextInput
      style={globalStyles.input}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      placeholderTextColor={globalStyles.placeholder}
      multiline={true}
    />
  );
};

export default StyledInput;