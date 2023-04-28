import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Clock from './Components/Clock';
import Alarm from './Components/Alarm';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Clock">
        <Stack.Screen name="Clock" component={Clock} />
        <Stack.Screen name="Alarm" component={Alarm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
