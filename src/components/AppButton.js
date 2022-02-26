import React, {Component} from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';

const AppButton = props => {
  const {text, click, style} = props;
  return (
    <TouchableOpacity onPress={click}>
      <Text style={[styles.login]}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  login: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'black',
    fontSize: 17,
    borderWidth: 1,
    padding: 20,
  },
});

export default AppButton;
