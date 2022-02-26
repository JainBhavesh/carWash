import React, {useState} from 'react';
import Stepper from 'react-native-stepper-ui';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import AppButton from '../../components/AppButton';
import styles from '../../Style/styles';
import CustomeHeader from '../../components/CustomeHeader';
import CustomeHeader_bottom from '../../components/CustomeHeader_bottom';
import AppBack from '../../components/AppBack';

const BookNow = props => {
  const [mobileNo, setMobileNo] = useState();
  const [loading, setLoading] = useState(false);
  const MyComponent = props => {
    return (
      <View>
        <Text>{props.title}</Text>
      </View>
    );
  };
  const content = [
    <MyComponent title="Basic info" />,
    <MyComponent title="Date & Time" />,
    <MyComponent title="Finish" />,
  ];
  const submit = async () => {};
  const [active, setActive] = useState(0);
  return (
    <View style={{height: '100%', backgroundColor: 'white'}}>
      <SafeAreaView>
        <CustomeHeader headerText="Booking: Pure-hand Car Wash" />
        <CustomeHeader_bottom headerText="30 Minutes, Payment on the Spot" />
        <ScrollView keyboardShouldPersistTaps="handled">
          <View
            style={[
              {
                height: 500,
                position: 'relative',
              },
              styles.appPadding,
            ]}>
            <View>
              <View
                style={{
                  marginVertical: 30,
                  opacity: 1,
                  color: 'white',
                  borderRadius: 10,
                }}></View>
              <View style={{marginTop: 15}}>
                <TextInput
                  style={styles.textbox}
                  placeholder="Plate Number (eg. AB1234)"
                  placeholderTextColor="#acabab"
                  keyboardType="phone-pad"
                  value={mobileNo}
                  onChangeText={text => setMobileNo(text)}
                />
              </View>
            </View>
            <View
              style={{
                position: 'absolute',
                bottom: 0,
                width: '100%',
                left: 20,
              }}>
              <AppBack click={() => props.navigate.goBack()} />

              <AppButton
                text="Next"
                click={() => props.navigation.navigate('Booking_Date_Time')}
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const custStyles = StyleSheet.create({
  float: {
    height: 50,
    border: 1,
    width: 50,
    borderWidth: 2,
    borderColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 10,
    right: 0,
    backgroundColor: '#fff',
  },
});
export default BookNow;
