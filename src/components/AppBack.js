import React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';

const AppBack = props => {
  return (
    <TouchableOpacity onPress={() => props.click} style={custStyles.float}>
      <Image source={require('../assets/back.png')} />
    </TouchableOpacity>
  );
};

const custStyles = StyleSheet.create({
  float: {
    height: 50,
    border: 1,
    width: 50,
    borderWidth: 2,
    borderColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    marginBottom: 20,
    backgroundColor: '#fff',
  },
});

export default AppBack;
