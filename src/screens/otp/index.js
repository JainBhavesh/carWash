import React, {useState} from 'react';
import {View, Text, ScrollView, SafeAreaView} from 'react-native';
import AppButton from '../../components/AppButton';
import styles from '../../Style/styles';
import CustomeHeader from '../../components/CustomeHeader';
import Stepper from '../../components/Stepper';
import AppBack from '../../components/AppBack';
import FloatingTextBox from '../../components/FloatingTextBox';
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
    <View style={{height: '100%', backgroundColor: 'white'}}>
      <SafeAreaView>
        <CustomeHeader headerText="Registration" />
        <ScrollView keyboardShouldPersistTaps="handled">
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

            <View
              style={{
                margin: 10,
                marginTop: 80,
              }}>
              <AppBack />

              <AppButton
                text="Next"
                click={() => props.navigation.navigate('Registration')}
              />
            </View>

            <View
              style={{
                margin: 10,
                bottom: 0,
              }}>
              <AppButton
                text="Enter"
                click={() => props.navigation.navigate('BookNow')}
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default Otp;
