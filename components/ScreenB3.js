import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

function ScreenB3({ route, navigation }) {
  const { nombre, telefono } = route.params;

  return (
    <View style={styles.screenB}>
      <Text style={styles.text}>Hola {nombre}</Text>
      <Text style={styles.text}>Tu teléfono es {telefono}</Text>
      <Button title="Volver" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  screenB: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFFFFF' },
  text: { fontSize: 18, margin: 10 },
});

export default ScreenB3;
