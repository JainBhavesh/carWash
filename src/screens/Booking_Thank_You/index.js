import React, {useState} from 'react';
import Stepper from 'react-native-stepper-ui';
import {View, Text, Image, ScrollView, SafeAreaView} from 'react-native';
import AppButton from '../../components/AppButton';
import CustomeHeader from '../../components/CustomeHeader';
import CustomeHeader_bottom from '../../components/CustomeHeader_bottom';
const Booking_Thank_You = props => {
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
              <Image
                style={{marginLeft: 65, marginTop: 50}}
                source={require('../../assets/Done250.jpg')}
              />
              <View style={{marginLeft: 100}}>
                <Text style={{marginLeft: 75, fontWeight: 'bold'}}>DONE!</Text>
                <Text style={{marginLeft: 13, fontWeight: 'bold'}}>
                  Please arrive within 10mins,
                </Text>
              </View>
              <Text style={{marginLeft: 70, fontWeight: 'bold'}}>
                or booking will be cancelled automatically
              </Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
      <View
        style={{
          margin: 10,
          marginTop: 100,
          bottom: 0,
        }}>
        <AppButton
          text="Back to My Bookings"
          click={() => props.navigation.navigate('BookNow')}
        />
      </View>
      <View
        style={{
          margin: 10,
          bottom: 0,
        }}>
        <AppButton
          text="Done"
          click={() => props.navigation.navigate('Dashboard')}
        />
      </View>
    </View>
  );
};

export default Booking_Thank_You;