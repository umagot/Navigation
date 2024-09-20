import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ScreenC1 from '../components/ScreenC1';
import ScreenC2 from '../components/ScreenC2';

const StackC = createNativeStackNavigator();

function StackCNavigator() {
  return (
    <StackC.Navigator>
      <StackC.Screen name="ScreenC1" component={ScreenC1} />
      <StackC.Screen name="ScreenC2" component={ScreenC2} />
    </StackC.Navigator>
  );
}

export default StackCNavigator;
