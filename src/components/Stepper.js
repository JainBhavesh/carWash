import React, {FC, useState, ReactElement} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ViewStyle,
  TextStyle,
  ScrollView,
} from 'react-native';

const search = (keyName, myArray) => {
  let value = false;
  myArray.map(val => {
    if (val === keyName) {
      value = true;
    }
  });
  return value;
};

const Stepper = props => {
  const {active, content, wrapperStyle} = props;
  const [step, setStep] = useState([0]);

  return (
    <View style={wrapperStyle}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          paddingRight: 20,
          paddingBottom: 5,
          paddingLeft: 15,
        }}>
        {content.map((_, i) => {
          return (
            <React.Fragment key={i}>
              {i !== 0 && (
                <View
                  style={{
                    flex: 1,
                    height: 1,
                    backgroundColor: 'grey',
                    opacity: 1,
                  }}
                />
              )}
              <View
                style={[
                  {
                    borderRadius: 30,
                    justifyContent: 'center',
                    alignItems: 'center',
                    opacity: 1,
                  },
                ]}>
                <Text
                  style={[
                    {
                      color: 'white',
                      fontFamily: 'Roboto',
                      fontStyle: 'normal',
                      fontWeight: 'normal',
                      fontSize: 12,
                      lineHeight: 18,
                      backgroundColor: active == i ? 'black' : 'grey',
                      paddingTop: 5,
                      paddingBottom: 5,
                      paddingRight: 10,
                      paddingLeft: 10,
                    },
                  ]}>
                  {i + 1}
                </Text>
                <Text style={{color: active == i ? '#000' : 'grey'}}>
                  {content[i]}
                </Text>
              </View>
            </React.Fragment>
          );
        })}
      </View>
    </View>
  );
};

export default Stepper;
