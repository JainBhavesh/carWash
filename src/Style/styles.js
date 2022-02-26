import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';

const {width, fontScale} = Dimensions.get('window');

let styles = StyleSheet.create({
  bg: {
    backgroundColor: 'white',
  },
  appPadding: {
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  fullHeight: {
    height: '100%',
  },
  pt20: {
    paddingTop: 20,
  },
  _logo: {
    height: 120,
    width: 120,
    alignSelf: 'center',
  },
  logo: {
    marginTop: 40,
    marginBottom: 20,
  },
  loginTitle: {
    fontSize: 40 / fontScale,
    fontWeight: 'bold',
    color: '#24253D',
    marginBottom: 30,
  },
  placeholder: {
    height: 50,
    width: '100%',
    color: '#acabab',
  },
  container: {
    backgroundColor: 'black',
    marginBottom: 10,
    padding: 10 / fontScale,
    borderRadius: 5,
  },
  text: {
    fontSize: 20 / fontScale,
    color: 'white',
  },
  secoundaryText: {
    fontSize: 15 / fontScale,
    color: 'white',
  },
  textbox: {
    backgroundColor: '#F8F8F8',
    height: 60,
    color: '#777986',
    fontSize: 17,
    padding: 20,
  },

  privacy: {
    color: '#777986',
    fontSize: 16,
    marginTop: 30,
  },
  picker: {width: '100%', color: 'black'},
  placeholder: {
    width: '100%',
    color: 'grey',
  },
});

export default styles;
