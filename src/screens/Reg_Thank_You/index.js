import React, {useState} from 'react';
import Stepper from 'react-native-stepper-ui';
import {View, Text, Image, ScrollView, SafeAreaView} from 'react-native';
import AppButton from '../../components/AppButton';
import CustomeHeader from '../../components/CustomeHeader';
const Reg_Thank_You = props => {
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
    <MyComponent title="Verify No." />,
    <MyComponent title="Simple Info" />,
    <MyComponent title="Finish" />,
  ];
  const submit = async () => {};
  const [active, setActive] = useState(0);
  return (
    <View
      style={{
        height: '100%',
        backgroundColor: 'white',
        justifyContent: 'space-between',
      }}>
      <SafeAreaView>
        <ScrollView keyboardShouldPersistTaps="handled">
          <View style={{height: '100%'}}>
            <CustomeHeader headerText="Registration" />
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

              <View style={{alignSelf: 'center'}}>
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
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
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
  );
};

export default Reg_Thank_You;
