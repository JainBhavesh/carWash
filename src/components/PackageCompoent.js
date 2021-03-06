import React, {useEffect} from 'react';
import {Text, TouchableOpacity, StyleSheet, View, Image} from 'react-native';

const PackageComponent = props => {
  const {text, image, category, price, period, click} = props;

  return (
    <View style={styles.card}>
      <TouchableOpacity onPress={click} style={{padding: 10}}>
        <Text style={[styles.text, period && styles.bordered]}>{text}</Text>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 10,
          }}>
          <Image
            source={image}
            style={{marginRight: 20, height: 60, width: 60}}
          />
          <View
            style={{
              flexDirection: 'column',
              marginRight: 10,
              alignItems: 'flex-end',
            }}>
            <View>
              <Text style={styles.category}>{category}</Text>
            </View>
            <Text style={styles.price}>${price}</Text>
          </View>
        </View>
      </TouchableOpacity>
      {period != '' && (
        <Text style={styles.period}>Valid Period: {period}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    color: '#24253D',
    fontSize: 17,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginBottom: 10,
    lineHeight: 25,
    letterSpacing: 0.22,
  },
  price: {
    fontSize: 24,
    fontWeight: '900',
    color: 'black',
  },
  category: {
    backgroundColor: 'black',
    color: 'white',
    paddingVertical: 2,
    paddingHorizontal: 5,
    fontSize: 12,
    textAlign: 'center',
  },
  card: {
    backgroundColor: 'white',
    marginBottom: 20,
  },
  bordered: {
    borderBottomWidth: 2,
    borderStyle: 'dashed',
  },
  period: {
    backgroundColor: '#E0E0E1',
    paddingVertical: 4,
    paddingHorizontal: 10,
    color: '#000',
    fontWeight: '700',
  },
});

export default PackageComponent;
