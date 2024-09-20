import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function ScreenA1() {
  const navigation = useNavigation();

  return (
    <View style={styles.screenA}>
      <Text style={styles.text}>Pantalla A1</Text>
      <Image 
        source={{ uri: 'https://marketplace.canva.com/EAFCYLq9woU/1/0/1600w/canva-cartel-de-bienvenida-floral-verde-y-amarillo-1BepnlEQmPA.jpg' }} 
        style={styles.image}
      />
      <Button title="Ir a Pantalla A2" onPress={() => navigation.navigate('ScreenA2')} />
    </View>
  );
}

const styles = StyleSheet.create({
  screenA: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFC0CB' },
  text: { fontSize: 18, margin: 10 },
  image: { width: 300, height: 200, marginVertical: 20 }, 
});

export default ScreenA1;
