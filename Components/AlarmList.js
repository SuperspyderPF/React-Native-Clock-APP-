import React from 'react';
import {FlatList} from 'react-native';
import AlarmItem from './AlarmItem';

const AlarmList = ({alarms}) => {
  const renderItem = ({item}) => <AlarmItem time={item} />;

  return (
    <FlatList
      data={alarms}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

export default AlarmList;
