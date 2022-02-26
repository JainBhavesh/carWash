import React, {useState} from 'react';
import {
  View,
  Text,
  Dimensions,
  SafeAreaView,
  KeyboardAvoidingView,
} from 'react-native';
import AppButton from '../../components/AppButton';
import styles from '../../Style/styles';
import CustomeHeader from '../../components/CustomeHeader';
import Stepper from '../../components/Stepper';
import AppBack from '../../components/AppBack';
import FloatingTextBox from '../../components/FloatingTextBox';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const {height} = Dimensions.get('window');
const Otp = props => {
  const [mobileNo, setMobileNo] = useState();
  const MyComponent = props => {
    return <Text>{props.title}</Text>;
  };
  const content = [
    <MyComponent title="Verify No." />,
    <MyComponent title="Logged In" />,
  ];
  const submit = async () => {};
  const [active, setActive] = useState(0);
  return (
    <SafeAreaView style={{flex: 1}}>
      <CustomeHeader headerText="Login" />
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

        <View
          style={[
            styles.appPadding,
            {
              flex: 1,
              justifyContent: 'flex-end',
            },
          ]}>
          <AppBack />

          <AppButton
            text="Next"
            click={() => props.navigation.navigate('Registration')}
          />
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default Otp;
