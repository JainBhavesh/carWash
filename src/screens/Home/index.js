import React from 'react';
import {SafeAreaView, Text, View, Image, ImageBackground} from 'react-native';
import {home_header_img, logo, my_bookings_icn} from '../../assets';
import styles from './styles';

const Home = () => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ImageBackground
        source={home_header_img}
        style={styles.homeHeaderContainer}>
        <Image
          source={logo}
          resizeMode="contain"
          style={{height: 120, width: 120}}
        />
      </ImageBackground>
      <View style={styles.homeContent}>
        <View style={[styles.row, styles.gridLayout]}>
          <View style={[styles.row, styles.grid]}>
            <View style={styles.allCenter}>
              <Text style={styles.gridText}>My Bookings</Text>
            </View>
            <Image source={my_bookings_icn} style={{width: 48, height: 48}} />
          </View>

          <View style={[styles.row, styles.grid]}>
            <View style={styles.allCenter}>
              <Text style={styles.gridText}>My History</Text>
            </View>
            <Image source={my_bookings_icn} style={{width: 48, height: 48}} />
          </View>

          <View style={[styles.row, styles.grid]}>
            <View style={styles.allCenter}>
              <Text style={styles.gridText}>My Packages</Text>
            </View>
            <Image source={my_bookings_icn} style={{width: 48, height: 48}} />
          </View>

          <View style={[styles.row, styles.grid]}>
            <View style={styles.allCenter}>
              <Text style={styles.gridText}>Promotions</Text>
            </View>
            <Image source={my_bookings_icn} style={{width: 48, height: 48}} />
          </View>
        </View>
        <View style={[styles.row, styles.banner]}>
          <View style={styles.allCenter}>
            <Text style={styles.bannerText}>My Bookings</Text>
          </View>
          <Image
            source={my_bookings_icn}
            style={{width: 48, height: 48, tintColor: '#fff'}}
          />
        </View>

        <View style={[styles.row, styles.contentHeader]}>
            <View style={{backgroundColor: '#000', width: 5}} />
            <Text style={styles.title}>Working Hours</Text>
        </View>

      </View>
    </SafeAreaView>
  );
};

export default Home;
