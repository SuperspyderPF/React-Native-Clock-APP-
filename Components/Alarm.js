import React, {useState} from 'react';
import {View, Button, Platform} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import AlarmList from './AlarmList';

const Alarm = () => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [alarms, setAlarms] = useState([]);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showPicker = () => {
    setShow(true);
  };

  const addAlarm = () => {
    setAlarms([...alarms, date]);
    setShow(false);
  };

  return (
    <View>
      <Button title="Add Alarm" onPress={showPicker} />
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode="time"
          display="default"
          onChange={onChange}
          onTouchCancel={addAlarm}
        />
      )}
      <AlarmList alarms={alarms} />
    </View>
  );
};

export default Alarm;
