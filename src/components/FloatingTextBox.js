import React, {useEffect, useState, useRef} from 'react';
import {View, StyleSheet, TextInput, Text, Animated} from 'react-native';

const FloatingTextBox = props => {
  const [value, setValue] = useState('');
  const moveText = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (props.value) setValue(props.value);
    if (value !== '') {
      moveTextTop();
    } else if (value === '') {
      moveTextBottom();
    }
  }, [value]);

  const onChangeText = text => {
    setValue(text);
    props.onChangeText(text);
  };

  const onFocusHandler = () => {
    if (value !== '') {
      moveTextTop();
    }
  };

  const onBlurHandler = () => {
    if (value === '') {
      moveTextBottom();
    }
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
    outputRange: [4, -12],
  });

  const animStyle = {
    transform: [
      {
        translateY: yVal,
      },
    ],
    fontSize: '11px',
    lineHeight: '16px',
    letterSpacing: ' 0.141429px',
    color: '#777986',
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.animatedStyle, animStyle]}>
        <Text style={styles.label}>{props.label}</Text>
      </Animated.View>
      <TextInput
        autoCapitalize={'none'}
        style={styles.input}
        value={props.value}
        onChangeText={text => onChangeText(text)}
        editable={true}
        keyboardType={props.keyboardType}
        onFocus={onFocusHandler}
        onBlur={onBlurHandler}
        blurOnSubmit
        {...props}
      />
    </View>
  );
};
export default FloatingTextBox;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    width: '100%',
    alignSelf: 'center',
    backgroundColor: '#F8F8F8',
  },
  icon: {
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    color: '#777986',
    fontSize: 17,
    paddingLeft: 20,
    paddingTop: 15,
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
    fontSize: 35,
    lineHeight: '25px',
    letterSpacing: '0.218571px',
    color: '#676A7B',
  },
});
