import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import AppButton from '../../components/AppButton';
import styles from '../../Style/styles';
import CustomeHeader from '../../components/CustomeHeader';
import Stepper from '../../components/Stepper';
import FloatingTextBox from '../../components/FloatingTextBox';
import AppBack from '../../components/AppBack';
import {Picker} from '@react-native-picker/picker';

const Registration = props => {
  const [mobileNo, setMobileNo] = useState();
  const [district, setDistrict] = useState(0);
  const [licenseNo, setLicenseNo] = useState();
  const MyComponent = props => {
    return (
      <View>
        <Text>{props.title}</Text>
      </View>
    );
  };
  const content = [
    <MyComponent title="Verify No." />,
    <MyComponent title="Simple Info" />,
    <MyComponent title="Finish" />,
  ];
  const submit = async () => {};
  const [active, setActive] = useState(0);

  const verification = () => {
    return (
      <View>
        <View>
          <FloatingTextBox
            value={mobileNo}
            onChangeText={text => setMobileNo(text)}
            keyboardType="phone-pad"
            label="Verification Code"
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignSelf: 'center',
            justifyContent: 'space-between',
            alignContent: 'center',
            alignItems: 'center',
            marginTop: 20,
          }}>
          <Text style={{marginRight: 40}}>58 sec later to send again</Text>
          <AppButton
            text="Send SMS"
            style={{width: '120px', height: '46px'}}
            click={() => {}}
          />
        </View>
      </View>
    );
  };

  const basicInfo = () => {
    return (
      <View>
        <View>
          <FloatingTextBox
            value={mobileNo}
            onChangeText={text => setMobileNo(text)}
            keyboardType="phone-pad"
            label="Lincense No. (eg. AB1234)"
          />
        </View>
        <View style={{backgroundColor: '#F8F8F8', height: 60, paddingTop: 5}}>
          <Picker
            selectedValue={district}
            style={district == 0 ? styles.placeholder : styles.picker}
            onValueChange={itemValue => setDistrict(itemValue)}>
            <Picker.Item label="Living District" value="" />
            <Picker.Item label="Kwun Tong" value="male" />
          </Picker>
        </View>
        <View style={{marginTop: 20}}>
          <FloatingTextBox
            value={licenseNo}
            onChangeText={text => setLicenseNo(text)}
            keyboardType="phone-pad"
            label="Name (eg. Anson Chan)"
          />
        </View>
      </View>
    );
  };

  const thankYou = () => {
    return (
      <View
        style={{alignItems: 'center', marginTop: '30%', marginBottom: '20%'}}>
        <Image source={require('../../assets/Done250.jpg')} />
        <Text
          style={{
            textAlign: 'center',
            fontWeight: 'bold',
            color: 'black',
          }}>
          Congratulation!
        </Text>
        <Text
          style={{
            textAlign: 'center',
            fontWeight: 'bold',
            color: 'black',
          }}>
          Registration Success
        </Text>
      </View>
    );
  };

  return (
    <View style={{height: '100%', backgroundColor: 'white'}}>
      <SafeAreaView>
        <CustomeHeader headerText="Registration" />
        <ScrollView keyboardShouldPersistTaps="handled">
          <View
            style={[
              styles.appPadding,
              {
                height: '100%',
                justifyContent: 'space-evenly',
                flex: 1,
                alignContent: 'space-around',
              },
            ]}>
            <View
              style={{
                marginVertical: 30,
                marginHorizontal: 10,
                opacity: 1,
                color: 'white',
                borderRadius: 10,
              }}>
              <Stepper active={active} content={content} />
            </View>
            {active == 0 && verification()}
            {active == 1 && basicInfo()}
            {active == 2 && thankYou()}
            {active !== 2 ? (
              <View
                style={{
                  margin: 10,
                  marginTop: 80,
                  position: 'relative',
                }}>
                <AppBack click={() => props.navigate.goBack()} />

                <AppButton
                  text="Next"
                  click={() => {
                    if (active == 2) {
                      props.navigation.navigate('Otp');
                    }
                    setActive(active + 1);
                  }}
                />
              </View>
            ) : (
              <View style={{marginTop: '30%'}}>
                <AppButton
                  text="Enter"
                  click={() => {
                    if (active == 2) {
                      props.navigation.navigate('BookNow');
                    }
                    setActive(active + 1);
                  }}
                />
              </View>
            )}
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
export default Registration;