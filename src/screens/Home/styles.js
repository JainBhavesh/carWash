import {StyleSheet, Dimensions} from 'react-native';
const {height} = Dimensions.get('window');
const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  homeHeaderContainer: {
    height: height / 3 - 20,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  homeContent: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
  },
  grid: {
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    width: '48%',
    marginBottom: 15,
    // SHADOW
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  gridText: {
    color: '#000',
    // textAlign: 'center'
  },
  allCenter: {
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1,
  },
  gridLayout: {
    flexWrap: 'wrap',
    marginHorizontal: 15,
    justifyContent: 'space-between',
    marginTop: 25,
  },
  banner: {
    backgroundColor: '#000',
    marginHorizontal: 15,
    justifyContent: 'space-between',
    marginTop: 25,
    // SHADOW
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  bannerText: {
    color: '#fff',
    fontWeight: '800',
    fontSize: 20,
  },

  contentHeader: {
    marginHorizontal: 15,
    marginTop: 25,    
  },
  title: {
      color: '#000',
      fontSize: 22,
      fontWeight: '800',
      marginLeft: 10
  }
});

export default styles;
