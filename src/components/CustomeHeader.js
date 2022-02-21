import React from 'react';
import {Text, View, StyleSheet, Dimensions} from 'react-native';
const {fontScale} = Dimensions.get('window');

const CustomeHeader = props => {
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
    height: 76,
    backgroundColor: 'black',
    elevation: 5,
  },
  textstyle: {
    color: 'white',
    fontSize: 22 / fontScale,
    fontWeight: 'bold',
    paddingLeft: 20,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default CustomeHeader;
