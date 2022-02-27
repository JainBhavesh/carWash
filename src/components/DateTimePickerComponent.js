import React from 'react';
import {View, Text} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const DateTimePickerComponent = props => {
  const {date, onchangeDate} = props;

  const onChange = (event, selectedDate) => {       
      if (selectedDate !== undefined) {
        onchangeDate(selectedDate);
      }
  };
  return (
    <DateTimePicker
      value={new Date()}
      mode={'date'}
      display="default"
      onChange={onChange}
      
    />
  );
};

export default React.memo(DateTimePickerComponent);
