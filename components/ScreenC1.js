import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function ScreenC1() {
  const navigation = useNavigation();

  return (
    <View style={styles.screenC}>
      <Text style={styles.text}>Pantalla C1</Text>
      <Button title="Ir a Pantalla C2" onPress={() => navigation.navigate('ScreenC2')} />
    </View>
  );
}

const styles = StyleSheet.create({
  screenC: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFFF00' },
  text: { fontSize: 18, margin: 10 },
});

export default ScreenC1;
