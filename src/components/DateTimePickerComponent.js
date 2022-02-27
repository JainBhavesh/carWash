import React from 'react';
import {View, Text} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const DateTimePickerComponent = props => {
  const {date, onchangeDate} = props;

  const onChange = (event, selectedDate) => { 
      console.log('selectedDate >>> ', event);   
    onchangeDate(selectedDate);

  };
  return (
    <DateTimePicker
      value={date}
      mode={'date'}
      display="default"
      onChange={onChange}
      onTouchCancel={() => console.log('cancel')}
    />
  );
};

export default React.memo(DateTimePickerComponent);
