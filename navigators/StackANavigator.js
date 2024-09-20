import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ScreenA1 from '../components/ScreenA1';
import ScreenA2 from '../components/ScreenA2';

const StackA = createNativeStackNavigator();

function StackANavigator() {
  return (
    <StackA.Navigator>
      <StackA.Screen name="ScreenA1" component={ScreenA1} />
      <StackA.Screen name="ScreenA2" component={ScreenA2} />
    </StackA.Navigator>
  );
}

export default StackANavigator;
