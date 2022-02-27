import React from 'react';
import {Text, FlatList, StyleSheet} from 'react-native';

const TimeSlotComponent = props => {
  const renderSlot = ({item}) => {
    return (
      <Text
        style={[
          styles.slot,
          !item.isAvilable && styles.slotFull,
          item.isSelected && styles.slotSelected,
        ]}>
        {item.time}
      </Text>
    );
  };

  return (
    <FlatList
      data={props.timeSlot}
      renderItem={renderSlot}
      numColumns={4}
      key={4}
    />
  );
};

export default TimeSlotComponent;

const styles = StyleSheet.create({
  slot: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 15,
    margin: 10,
    fontSize: 15,
    fontWeight: 'bold',
  },
  slotSelected: {
    backgroundColor: 'black',
    color: '#fff',
  },
  slotFull: {
    backgroundColor: '#BDBDBD',
    color: '#fff',
  },
});
