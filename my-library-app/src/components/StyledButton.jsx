import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { globalStyles } from '../styles/styles';

const StyledButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={globalStyles.button} onPress={onPress}>
      <Text style={globalStyles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default StyledButton;