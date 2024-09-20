import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ScreenB1 from '../components/ScreenB1';
import ScreenB2 from '../components/ScreenB2';
import ScreenB3 from '../components/ScreenB3'; 

const StackB = createNativeStackNavigator();

function StackBNavigator() {
  return (
    <StackB.Navigator>
      <StackB.Screen name="ScreenB1" component={ScreenB1} />
      <StackB.Screen name="ScreenB2" component={ScreenB2} />
      <StackB.Screen name="ScreenB3" component={ScreenB3} /> 
    </StackB.Navigator>
  );
}

export default StackBNavigator;
