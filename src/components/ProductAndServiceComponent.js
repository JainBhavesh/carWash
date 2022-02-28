import React from 'react';
import {Text, TouchableOpacity, StyleSheet, View, Image} from 'react-native';

const ProductAndServiceComponent = props => {
  const {text, image, category, price, click} = props;

  return (
    <View style={styles.card}>
      <TouchableOpacity onPress={click}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Image
            source={image}
            style={{marginRight: 10, height: 106, width: 106}}
          />
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              marginRight: 10,
              alignItems: 'flex-end',
            }}>
            <Text style={[styles.text]}>{text}</Text>

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
    lineHeight: 25,
    letterSpacing: 0.22,
    flexWrap: 'wrap',
    marginBottom: 5,
    height: 50,
    alignSelf: 'flex-start',
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
    padding: 10,
  },
});

export default ProductAndServiceComponent;
