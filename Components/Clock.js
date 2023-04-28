import React, {useEffect, useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const Clock = ({navigation}) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.time}>
        {time.getHours()}:{time.getMinutes()}:{time.getSeconds()}
      </Text>
      <Button
        title="Manage Alarms"
        onPress={() => navigation.navigate('Alarm')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  time: {
    fontSize: 48,
    fontWeight: 'bold',
  },
});

export default Clock;
