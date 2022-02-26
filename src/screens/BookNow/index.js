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
  Dimensions,
  StatusBar,
} from 'react-native';
import AppButton from '../../components/AppButton';
import styles from '../../Style/styles';
import CustomeHeader from '../../components/CustomeHeader';
import CustomeHeader_bottom from '../../components/CustomeHeader_bottom';
import AppBack from '../../components/AppBack';
import Stepper from '../../components/Stepper';
import FloatingTextBox from '../../components/FloatingTextBox';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import FloatingDropDown from '../../components/FloatingDropdown';

const {height} = Dimensions.get('window');
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
  const option = [
    {label: 'Kwun Tong', value: '1'},
    {label: 'Kwun Tong', value: '2'},
  ];
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
      <View style={{marginVertical: 40}}>
        <FloatingDropDown
          selectItem={text => setBranch(text)}
          value={branch}
          option={option}
          label={'Branch'}
        />
        <View>
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
      <View
        style={{
          marginTop: '20%',
          alignItems: 'center',
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
    );
  };
  return (
    <SafeAreaView style={{backgroundColor: 'black'}}>
      <StatusBar backgroundColor={'black'}></StatusBar>
      <CustomeHeader headerText="Booking: Pure-hand Car Wash" />
      <CustomeHeader_bottom headerText="30 Minutes, Payment on the Spot" />
      <KeyboardAwareScrollView
        extraScrollHeight={0}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{height: height - 80, backgroundColor: '#fff'}}>
        <View style={[styles.appPadding, {marginVertical: 30}]}>
          <Stepper active={active} content={content} />
          {active == 0 && basicInfo()}
          {active == 1 && dateTime()}
          {active == 2 && thankYou()}
        </View>
        {active !== 2 ? (
          <View style={styles.bottomBotton}>
            <AppBack click={() => props.navigation.goBack()} />

            <AppButton text="Next" click={() => setActive(active + 1)} />
          </View>
        ) : (
          <View style={styles.bottomBotton}>
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
        )}
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};
export default BookNow;
