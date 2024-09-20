import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

function ScreenB2({ navigation }) {
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');

  return (
    <View style={styles.screenB}>
      <Text style={styles.text}>Ingresa tu Nombre:</Text>
      <TextInput
        style={styles.input}
        placeholder="Nombre"
        value={nombre}
        onChangeText={setNombre}
      />
      <Text style={styles.text}>Ingresa tu Teléfono:</Text>
      <TextInput
        style={styles.input}
        placeholder="Teléfono"
        value={telefono}
        onChangeText={setTelefono}
        keyboardType="numeric"
      />
      <Button
        title="Confirmar"
        onPress={() => navigation.navigate('ScreenB3', { nombre, telefono })}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screenB: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFFFFF' },
  text: { fontSize: 18, margin: 10 },
  input: { height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 20, width: '80%', paddingHorizontal: 10 },
});

export default ScreenB2;
