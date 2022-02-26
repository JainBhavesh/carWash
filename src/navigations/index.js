import * as React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Login from './../screens/Login';
import Otp from './../screens/otp';
import Privacy from '../screens/privacy';
import BookNow from './../screens/BookNow';
import Booking_Thank_You from './../screens/Booking_Thank_You';
import Booking_Date_Time from './../screens/Booking_Date_Time';
import Explore from '../screens/Explore';
import Home from '../screens/Home';
import Registration from '../screens/Registration';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeTabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        labelStyle: {
          fontWeight: 'bold',
          fontSize: 13,
        },
        activeTintColor: 'black',
        inactiveTintColor: 'grey',
        tabBar: props => (
          <View style={styles.navigatorContainer}>
            <BottomTabBar {...props} />
            {IS_IPHONE_X && (
              <View
                style={[
                  styles.xFillLine,
                  {
                    backgroundColor: barColor,
                  },
                ]}
              />
            )}
          </View>
        ),
        screenOptions: ({route}) => {
          console.log('Route screen', route);
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) =>
            focused ? (
              <View style={[styles.tabParent, styles.borderBlack]}>
                <Image
                  source={require('./../assets/bottom-home-activated.png')}
                  style={[styles.tabImage]}
                />
              </View>
            ) : (
              <View style={[styles.tabParent, styles.borderWhite]}>
                <Image
                  source={require('./../assets/bottom-home.png')}
                  style={styles.tabImage}
                />
              </View>
            ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={Explore}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <View style={[styles.tabParent, styles.borderBlack]}>
                <Image
                  source={require('./../assets/bottom-car-activated.png')}
                  style={[styles.tabImage, styles.borderWhite]}
                />
              </View>
            ) : (
              <View style={[styles.tabParent, styles.borderWhite]}>
                <Image
                  source={require('./../assets/bottom-car.png')}
                  style={styles.tabImage}
                />
              </View>
            ),
        }}
      />

      <Tab.Screen
        name="Notification"
        component={Explore}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <View style={[styles.tabParent, styles.borderBlack]}>
                <Image
                  source={require('./../assets/bottom-notification-activated.png')}
                  style={styles.tabImage}
                />
              </View>
            ) : (
              <View style={[styles.tabParent, styles.borderWhite]}>
                <Image
                  source={require('./../assets/bottom-notification.png')}
                  style={styles.tabImage}
                />
              </View>
            ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Explore}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <View style={[styles.tabParent, styles.borderBlack]}>
                <Image
                  source={require('./../assets/bottom-profile-activated.png')}
                  style={styles.tabImage}
                />
              </View>
            ) : (
              <View style={[styles.tabParent, styles.borderWhite]}>
                <Image
                  source={require('./../assets/bottom-profile.png')}
                  style={styles.tabImage}
                />
              </View>
            ),
        }}
      />

      {/* <Tab.Screen name="" component={Wallet} /> */}
    </Tab.Navigator>
  );
};
const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="BookNow"
          component={BookNow}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Booking_Thank_You"
          component={Booking_Thank_You}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Booking_Date_Time"
          component={Booking_Date_Time}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Dashboard"
          component={HomeTabs}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Registration"
          component={Registration}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Otp"
          component={Otp}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Privacy"
          component={Privacy}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
let styles = StyleSheet.create({
  tabParent: {
    borderTopWidth: 4,
    width: 25,
    height: '100%',
    justifyContent: 'center',
  },
  borderBlack: {
    borderColor: 'balck',
  },
  borderWhite: {
    borderColor: 'white',
  },
  tabImage: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    height: 20,
    width: 20,
  },
});
export default Navigation;
