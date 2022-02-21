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
} from 'react-native';
import AppButton from '../../components/AppButton';
import styles from '../../Style/styles';

const Login = props => {
  const [mobileNo, setMobileNo] = useState();
  const [loading, setLoading] = useState(false);

  const submit = async () => {};

  return (
    <View style={{height: '100%', backgroundColor: 'white'}}>
      <SafeAreaView>
        <ScrollView keyboardShouldPersistTaps="handled">
          <View style={[styles.appPadding]}>
            <View style={[styles.logo]}>
              <Image
                source={require('./../../assets/logo.png')}
                style={styles._logo}
              />
            </View>
            <View style={styles._body_view}>
              <Text style={styles.loginTitle}>Login & Register</Text>
              <View style={styles.SectionStyle}>
                <TextInput
                  style={styles.textbox}
                  placeholder="Mobile Number"
                  placeholderTextColor="#acabab"
                  keyboardType="phone-pad"
                  value={mobileNo}
                  onChangeText={text => setMobileNo(text)}
                />
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
            {loading ? (
              <ActivityIndicator
                style={{marginTop: 8}}
                size="large"
                color="#23B9CE"
              />
            ) : (
              <View style={{marginTop: 40, marginBottom: 20}}>
                <AppButton text="Next" click={() => setLoading(true)} />
              </View>
            )}
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default Login;
