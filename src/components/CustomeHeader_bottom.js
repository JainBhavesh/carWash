import React from 'react';
import {Text, View, StyleSheet, Dimensions} from 'react-native';
const {fontScale} = Dimensions.get('window');

const CustomeHeader_bottom = props => {
  const {headerText} = props;
  return (
    <View style={styles.head}>
      <View style={[styles.container]}>
        <Text style={styles.textstyle}>{headerText}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  head: {
    height: 30,
    backgroundColor: 'black',
    elevation: 5,
  },
  textstyle: {
    marginBottom: 10,
    color: 'white',
    fontSize: 15 / fontScale,
    paddingLeft: 20,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default CustomeHeader_bottom;
