import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import AppButton from '../../components/AppButton';
import CustomeHeader from '../../components/CustomeHeader';
import styles from '../../Style/styles';

const Explore = props => {
  return (
    <SafeAreaView>
      <StatusBar backgroundColor={'black'}></StatusBar>
      <CustomeHeader headerText="Promotions" />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        style={[styles.bg, {height: '100%'}]}>
        <View style={[styles.appPadding]}></View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Explore;
