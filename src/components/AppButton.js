import React, {Component} from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';

export default class AppButton extends Component {
  render() {
    const {text, click} = this.props;
    return (
      <TouchableOpacity onPress={click}>
        <Text style={[styles.login]}>{text}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  login: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'black',
    fontSize: 17,
    borderWidth: 2,
    borderColor: 'grey',
    padding: 20,
  },
});
