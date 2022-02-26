import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import CustomeHeader from '../../components/CustomeHeader';
import PackageComponent from '../../components/PackageCompoent';
import styles from './styles';
import productImage from '../../assets/Done250.jpg';

const Explore = props => {
  const [active, setActive] = useState(0);
  const packageList = [
    {
      text: 'Pure-hand Car Wash',
      image: productImage,
      category: 'Hot',
      price: '1000',
      period: '12 Month',
    },
  ];

  const packageClick = item => {
    console.log('Package => ', item);
  };
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <StatusBar backgroundColor={'black'}></StatusBar>
      <CustomeHeader headerText="Promotions" />
      <View
        style={[
          styles.row,
          {
            justifyContent: 'space-between',
            backgroundColor: 'white',
          },
        ]}>
        <TouchableOpacity onPress={() => setActive(0)}>
          <Text style={active == 0 ? styles.selectedTab : styles.tabText}>
            Packages
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActive(1)}>
          <Text style={active == 1 ? styles.selectedTab : styles.tabText}>
            Products
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActive(2)}>
          <Text style={active == 2 ? styles.selectedTab : styles.tabText}>
            Services
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={[styles.appPadding]}>
          {packageList.map(item => (
            <PackageComponent click={() => packageClick(item)} {...item} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Explore;
