import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import CustomeHeader from '../../components/CustomeHeader';
import styles from '../../Style/styles';

const Privacy = props => {
  return (
    <View style={{height: '100%', backgroundColor: 'white'}}>
      <CustomeHeader headerText="Usage & Privacy Terms" />
      <SafeAreaView>
        <ScrollView keyboardShouldPersistTaps="handled">
          <View style={[styles.appPadding, styles.pt20, styles.fullHeight]}>
            <Text>
              歡迎使用由「xxxxxxxxxxxxxx」營運的xxxxxxxxxxxxxx.com
              (「本網站」)。請您仔細閱讀規管您使用本網站及／或站內資料的使用條款。
              若您使用本網站，即您已同意受使用條款約束，並接納於本網站內所刊登的「個人資料（私隱）政策聲明」（「該聲明」）。
              我們保留權利在沒有通知您的情況下不時更改使用條款。您於該等變動後持續使用本網站將被視為接納經修改的使用條款。倘您於任何時間不同意使用條款，請勿使用本網站。
              使用條款備有中文及英文版本，若中、英文版本之間有任何歧異或不一致之處，概以英文版本為準。
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
      <TouchableOpacity
        onPress={() => props.navigation.goBack()}
        style={custStyles.float}>
        <Image source={require('../../assets/back.png')} />
      </TouchableOpacity>
    </View>
  );
};

const custStyles = StyleSheet.create({
  float: {
    borderWidth: 2,
    borderColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
    width: 46,
    position: 'absolute',
    bottom: 20,
    right: 20,
    height: 46,
    backgroundColor: '#fff',
  },
});

export default Privacy;
