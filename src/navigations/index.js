import * as React from 'react';
import {Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Login from './../screens/Login';
import Privacy from '../screens/privacy';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeTabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          backgroundColor: 'black',
          justifyContent: 'space-between',
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
          paddingBottom: 10,
          paddingTop: 5,
          height: 70,
          zIndex: 100000,
        },
        labelStyle: {
          fontWeight: 'bold',
          fontSize: 12,
        },
        activeTintColor: '#a58430',
        inactiveTintColor: 'white',
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
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <Image
                source={require('./../assets/bottom-home-selected.png')}
                style={{height: 24, width: 24}}
              />
            ) : (
              <Image
                source={require('./../assets/bottom-home-selected.png')}
                style={{height: 24, width: 24}}
              />
            ),
        }}
      />
      <Tab.Screen
        name="Services"
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <Image
                source={require('./../assets/bottom-car.png')}
                style={{height: 24, width: 24}}
              />
            ) : (
              <Image
                source={require('./../assets/bottom-car.png')}
                style={{height: 24, width: 24}}
              />
            ),
        }}
      />

      <Tab.Screen
        name="Notification"
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <Image
                source={require('./../assets/bottom-notification.png')}
                style={{height: 22, width: 30}}
              />
            ) : (
              <Image
                source={require('./../assets/bottom-notification.png')}
                style={{height: 22, width: 30}}
              />
            ),
        }}
      />

      <Tab.Screen
        name="Profile"
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <Image
                source={require('./../assets/bottom-profile.png')}
                style={{height: 30, width: 24}}
              />
            ) : (
              <Image
                source={require('./../assets/bottom-profile.png')}
                style={{height: 30, width: 20}}
              />
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
          name="Dashboard"
          component={HomeTabs}
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

export default Navigation;
