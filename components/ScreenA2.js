import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function ScreenA2() {
  const navigation = useNavigation();

  return (
    <View style={styles.screenA}>
      <Text style={styles.text}>Pantalla A2</Text>
      <Button title="Ir a Pantalla A1" onPress={() => navigation.navigate('ScreenA1')} />
    </View>
  );
}

const styles = StyleSheet.create({
  screenA: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFC0CB' },
  text: { fontSize: 18, margin: 10 },
});

export default ScreenA2;
