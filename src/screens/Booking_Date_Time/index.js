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
const Booking_Date_Time = props => {
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
        <ScrollView keyboardShouldPersistTaps="handled">
          <View style={{height: '100%'}}>
            <CustomeHeader headerText="Booking: Pure-hand Car Wash" />
            <CustomeHeader_bottom headerText="30 Minutes, Payment on the Spot" />
            <View>
              <View
                style={{
                  marginVertical: 30,
                  marginHorizontal: 10,
                  opacity: 1,
                  color: 'white',
                  borderRadius: 10,
                }}>
                <Stepper
                  style={{backgroundColor: '#a1a1a1'}}
                  active={active}
                  content={content}
                  onNext={() => setActive(p => p + 1)}
                  onBack={() => setActive(p => p - 1)}
                  onFinish={() => Alert.alert('Finish')}
                />
              </View>
              <View style={{margin: 15}}>
                <TextInput
                  style={styles.textbox}
                  placeholder="Plate Number (eg. AB1234)"
                  placeholderTextColor="#acabab"
                  keyboardType="phone-pad"
                  value={mobileNo}
                  onChangeText={text => setMobileNo(text)}
                />
              </View>
              <View style={{margin: 15}}>
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
            <View style={{display: 'flex', flexDirection: 'row'}}>
              <View
                style={{
                  flex: 1,
                  marginTop: 0,
                  marginLeft: 40,
                  marginRight: 10,
                }}>
                <TouchableOpacity
                  onPress={() => props.navigation.goBack()}
                  style={custStyles.float}>
                  <Image source={require('../../assets/back.png')} />
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                margin: 10,
                marginTop: 80,
              }}>
              <AppButton
                text="Next"
                click={() => props.navigation.navigate('Booking_Thank_You')}
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
export default Booking_Date_Time;
