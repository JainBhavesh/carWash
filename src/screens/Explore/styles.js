import {StyleSheet, Dimensions} from 'react-native';
const {height, fontScale} = Dimensions.get('window');

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
  },
  tabText: {
    fontSize: 16,
    color: '#9B9B9B',
    padding: 20,
  },
  selectedTab: {
    fontSize: 16,
    color: '#000',
    padding: 20,
    fontWeight: 'bold',
    borderBottomWidth: 3,
    borderBottomColor: 'black',
  },
  appPadding: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  selected: {
    backgroundColor: 'black',
    color: '#a58430',
    width: 80,
    textAlign: 'center',
    padding: 5 / fontScale,
    borderWidth: 0.5,
    borderColor: 'black',
    fontSize: 10 / fontScale,
    borderRadius: 2,
  },
  link: {
    backgroundColor: 'white',
    color: 'black',
    width: 80,
    textAlign: 'center',
    padding: 5,
    borderWidth: 0.5,
    borderColor: 'black',
    fontSize: 10 / fontScale,
    borderRadius: 2,
    fontWeight: 'bold',
  },
});

export default styles;
