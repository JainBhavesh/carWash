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
import ProductAndServiceComponent from '../../components/ProductAndServiceComponent';
import {
  package_img,
  product1,
  product2,
  service1,
  service2,
} from '../../assets';

const Explore = props => {
  const [active, setActive] = useState(0);
  const packageList = [
    {
      text: 'Pure-hand Car Wash',
      image: package_img,
      category: 'Hot',
      price: '1000',
      period: '',
    },
    {
      text: '10* Pure-hand Car Wash Package ($220 @1) - Small Car ',
      image: package_img,
      category: 'Hot',
      price: '1000',
      period: '12 Months',
    },
  ];

  const productList = [
    {
      text: 'Dash Cam 行車紀錄儀',
      image: product1,
      category: 'Hot',
      price: '1000',
    },
    {
      text: '光鏡面軟蠟 New Scratch Clear Car Wa...',
      image: product2,
      category: 'Hot',
      price: '1000',
    },
  ];

  const productCategory = ['All', 'Coating', '3M水晶蠟服務', 'Scratch'];
  const serviceList = [
    {
      text: 'Professional Coating',
      image: service1,
      category: 'Hot',
      price: '1000',
    },
    {
      text: '3M水晶蠟服務',
      image: service2,
      category: 'Hot',
      price: '1000',
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
          {active == 0 &&
            packageList.map(item => (
              <PackageComponent click={() => packageClick(item)} {...item} />
            ))}

          {active == 1 && (
            <View>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                <View style={styles.pr}>
                  {productCategory.map(item => {
                    <TouchableOpacity>
                      <Text style={styles.aselected}>{item}</Text>
                    </TouchableOpacity>;
                  })}
                </View>
              </ScrollView>
              {productList.map(item => (
                <ProductAndServiceComponent
                  click={() => packageClick(item)}
                  {...item}
                />
              ))}
            </View>
          )}

          {active == 2 &&
            serviceList.map(item => (
              <ProductAndServiceComponent
                click={() => packageClick(item)}
                {...item}
              />
            ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Explore;
