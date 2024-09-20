import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function ScreenD1() {
  const navigation = useNavigation();

  return (
    <View style={styles.screenD}>
      <Text style={styles.text}>Pantalla D1</Text>
      <Button title="Ir a Pantalla D2" onPress={() => navigation.navigate('ScreenD2')} />
    </View>
  );
}

const styles = StyleSheet.create({
  screenD: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#008000' },
  text: { fontSize: 18, margin: 10 },
});

export default ScreenD1;
