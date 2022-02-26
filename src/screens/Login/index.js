import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  SafeAreaView,
  ActivityIndicator,
  Dimensions,
} from 'react-native';
import AppButton from '../../components/AppButton';
import FloatingTextBox from '../../components/FloatingTextBox';
import styles from '../../Style/styles';

const {height} = Dimensions.get('window');
const Login = props => {
  const [mobileNo, setMobileNo] = useState();
  const [loading, setLoading] = useState(false);

  const submit = async () => {};

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{height: height}}
        style={styles.bg}>
        <View
          style={{
            position: 'absolute',
            right: 20,
            top: 25,
            margin: 10,
          }}>
          <Image source={require('./../../assets/Vector.png')} />
        </View>
        <View style={[styles.appPadding]}>
          <View style={[styles.logo]}>
            <Image
              source={require('./../../assets/logo.png')}
              style={styles._logo}
            />
          </View>
          <View style={styles._body_view}>
            <Text style={styles.loginTitle}>Login & Register</Text>
            <View>
              <FloatingTextBox
                value={mobileNo}
                onChangeText={text => setMobileNo(text)}
                keyboardType="phone-pad"
                label="Mobile Number"
              />
              {/* <TextInput
                  style={styles.textbox}
                  placeholder="Mobile Number"
                  placeholderTextColor="#acabab"
                  keyboardType="phone-pad"
                  value={mobileNo}
                  onChangeText={text => setMobileNo(text)}
                /> */}
            </View>
          </View>
          <View style={styles._text_label}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Privacy')}>
              <Text style={styles.privacy}>
                *Click next to agree the Usage & Privacy Terms
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={[styles.appPadding, {flex: 1, justifyContent: 'flex-end'}]}>
          {loading ? (
            <ActivityIndicator
              style={{marginTop: 8}}
              size="large"
              color="#23B9CE"
            />
          ) : (
            <View style={{marginTop: 40, marginBottom: 20}}>
              <AppButton
                text="Next"
                click={() => {
                  props.navigation.navigate('Otp');
                }}
              />
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
    // </View>
  );
};

export default Login;
