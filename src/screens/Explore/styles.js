import {StyleSheet, Dimensions} from 'react-native';
const {height} = Dimensions.get('window');
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
});

export default styles;
