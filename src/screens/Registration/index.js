import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  Dimensions,
} from 'react-native';
import AppButton from '../../components/AppButton';
import styles from '../../Style/styles';
import CustomeHeader from '../../components/CustomeHeader';
import Stepper from '../../components/Stepper';
import FloatingTextBox from '../../components/FloatingTextBox';
import AppBack from '../../components/AppBack';
import {Picker} from '@react-native-picker/picker';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import FloatingDropDown from '../../components/FloatingDropdown';

const {height} = Dimensions.get('window');

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

  const option = [
    {label: 'Kwun Tong', value: '1'},
    {label: 'Kwun Tong', value: '2'},
  ];

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
        <FloatingDropDown
          selectItem={text => setDistrict(text)}
          value={district}
          option={option}
          label={'Living District'}
        />

        <FloatingTextBox
          value={licenseNo}
          onChangeText={text => setLicenseNo(text)}
          keyboardType="phone-pad"
          label="Name (eg. Anson Chan)"
        />
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
    <SafeAreaView>
      <CustomeHeader headerText="Registration" />
      <KeyboardAwareScrollView
        extraScrollHeight={0}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={[styles.bg, {height: height - 60}]}>
        <View style={[styles.appPadding]}>
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
        </View>
        {active !== 2 ? (
          <View style={styles.bottomBotton}>
            <AppBack click={() => props.navigation.goBack()} />

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
          <View style={styles.bottomBotton}>
            <AppButton
              text="Enter"
              click={() => {
                if (active == 2) {
                  props.navigation.navigate('BookNow');
                  return;
                }
                setActive(active + 1);
              }}
            />
          </View>
        )}
      </KeyboardAwareScrollView>
    </SafeAreaView>
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
