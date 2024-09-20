import React from 'react'; 
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function ScreenB1() {
  const navigation = useNavigation();  

  return (
    <View style={styles.screenB}>
      <Text style={styles.text}>Pantalla B1</Text>
      {}
      <Button title="Ir a Pantalla B2" onPress={() => navigation.navigate('ScreenB2')} />
    </View>
  );
}

const styles = StyleSheet.create({
  screenB: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFFFFF' },
  text: { fontSize: 18, margin: 10 },
});

export default ScreenB1;
