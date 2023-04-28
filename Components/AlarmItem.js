import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const AlarmItem = ({time}) => {
  const formattedTime = `${time.getHours()}:${time.getMinutes()}`;

  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.time}>{formattedTime}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eee',
    padding: 10,
    margin: 5,
    borderRadius: 5,
  },
  time: {
    fontSize: 18,
  },
});

export default AlarmItem;
