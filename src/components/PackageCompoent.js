import React, {useEffect} from 'react';
import {Text, TouchableOpacity, StyleSheet, View, Image} from 'react-native';

const PackageComponent = props => {
  const {text, image, category, price, period, click} = props;
  useEffect(() => {
    console.log('Packages => ', text);
  });
  return (
    <View style={styles.card}>
      <TouchableOpacity onPress={click}>
        <Text style={styles.text}>{text}</Text>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Image
            source={image}
            style={{marginRight: 20, height: 60, width: 60}}
          />
          <View
            style={{flexDirection: 'column', justifyContent: 'space-around'}}>
            <View>
              <Text style={styles.category}>{category}</Text>
            </View>
            <Text style={styles.price}>${price}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    color: '#24253D',
    fontSize: 17,
    padding: 20,
    marginBottom: 5,
  },
  price: {
    fontSize: 24,
    fontWeight: '900',
    color: 'black',
  },
  category: {
    backgroundColor: 'black',
    color: 'white',
    padding: 2,
    fontSize: 12,
    textAlign: 'center',
  },
  card: {
    backgroundColor: 'white',
    padding: 10,
  },
});

export default PackageComponent;
