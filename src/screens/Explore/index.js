import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import AppButton from '../../components/AppButton';
import styles from '../../Style/styles';

const Explore = props => {
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
            </View>
            <View style={styles._text_label}>
              <TouchableOpacity
                onPress={() => props.navigation.navigate('Privacy')}>
                <Text style={styles.privacy}>
                  *Click next to agree the Usage & Privacy Terms
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{marginTop: 40, marginBottom: 20}}>
              <AppButton text="Next" click={() => {}} />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default Explore;
