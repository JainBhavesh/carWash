import React, {useState} from 'react';
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
import Stepper from '../../components/Stepper';
import FloatingTextBox from '../../components/FloatingTextBox';

const BookNow = props => {
  const [branch, setBranch] = useState();
  const [plateNo, setPlateNo] = useState();
  const [date, setDate] = useState();
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

  const basicInfo = () => {
    return (
      <View>
        <View
          style={{
            marginVertical: 30,
            opacity: 1,
            color: 'white',
            borderRadius: 10,
          }}></View>
        <View style={{marginTop: 15}}>
          <FloatingTextBox
            value={plateNo}
            onChangeText={text => setPlateNo(text)}
            label="Plate Number (eg. AB1234)"
          />
        </View>
      </View>
    );
  };

  const dateTime = () => {
    return (
      <View>
        <View style={{margin: 15}}>
          <TextInput
            style={styles.textbox}
            placeholder="Branch"
            placeholderTextColor="#acabab"
            keyboardType="phone-pad"
            value={branch}
            onChangeText={text => setBranch(text)}
          />
        </View>
        <View style={{margin: 15}}>
          <TextInput
            style={styles.textbox}
            placeholder="Date"
            placeholderTextColor="#acabab"
            value={date}
            onChangeText={text => setDate(text)}
          />
        </View>
      </View>
    );
  };

  const thankYou = () => {
    return (
      <View>
        <View
          style={{
            alignSelf: 'center',
            marginTop: '30%',
            marginBottom: '30%',
          }}>
          <Image source={require('../../assets/Done250.jpg')} />
          <Text
            style={{
              textAlign: 'center',
              fontWeight: 'bold',
              color: 'black',
            }}>
            DONE!
          </Text>
          <Text
            style={{
              textAlign: 'center',
              color: 'grey',
            }}>
            Please arrive within 10mins,
          </Text>
          <Text
            style={{
              textAlign: 'center',
              color: 'grey',
            }}>
            or booking will be cancelled automatically
          </Text>
        </View>

        <View>
          <View style={{marginBottom: 20}}>
            <AppButton
              text="Back to My Bookings"
              click={() => props.navigation.navigate('BookNow')}
            />
          </View>

          <AppButton
            text="Done"
            click={() => props.navigation.navigate('Dashboard')}
          />
        </View>
      </View>
    );
  };
  return (
    <View style={[styles.fullHeight, {backgroundColor: 'white'}]}>
      <SafeAreaView style={{backgroundColor: 'black'}}>
        <CustomeHeader headerText="Booking: Pure-hand Car Wash" />
        <CustomeHeader_bottom headerText="30 Minutes, Payment on the Spot" />
        <ScrollView
          keyboardShouldPersistTaps="handled"
          style={{backgroundColor: 'white'}}>
          <View style={[styles.appPadding, styles.fullHeight]}>
            <Stepper active={active} content={content} />
            {active == 0 && basicInfo()}
            {active == 1 && dateTime()}
            {active == 2 && thankYou()}
            {active !== 2 && (
              <View style={{marginTop: 20}}>
                <AppBack click={() => props.navigation.goBack()} />

                <AppButton text="Next" click={() => setActive(active + 1)} />
              </View>
            )}
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};
export default BookNow;
