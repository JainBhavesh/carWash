import React, {useEffect, useState, useRef} from 'react';
import {View, StyleSheet, Text, Animated} from 'react-native';
import Dropdown from './Dropdown';

const FloatingDropDown = props => {
  const [value, setValue] = useState('');
  const moveText = useRef(new Animated.Value(0)).current;
  const {option, selectItem, label} = props;

  useEffect(() => {
    console.log('Option => ', option);
    if (value !== '') {
      moveTextTop();
    } else if (value === '') {
      moveTextBottom();
    }
  }, [value]);

  const onChangeText = text => {
    setValue(text.value);
    selectItem(text.value);
  };

  const moveTextTop = () => {
    Animated.timing(moveText, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  const moveTextBottom = () => {
    Animated.timing(moveText, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  const yVal = moveText.interpolate({
    inputRange: [0, 1],
    outputRange: [4, -15],
  });

  const animStyle = {
    transform: [
      {
        translateY: yVal,
      },
    ],
    fontSize: 30,
    color: '#777986',
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.animatedStyle, animStyle]}>
        <Text style={styles.label}>{label}</Text>
      </Animated.View>
      <Dropdown data={option} onSelect={onChangeText} />
    </View>
  );
};
export default FloatingDropDown;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    width: '100%',
    alignSelf: 'center',
    backgroundColor: '#F8F8F8',
    height: 60,
  },
  animatedStyle: {
    top: 15,
    left: 20,
    position: 'absolute',
    borderRadius: 90,
    zIndex: 10000,
    fontFamily: 'Noto Sans TC',
    fontStyle: 'normal',
    fontWeight: 'normal',
    color: '#676A7B',
  },
});
