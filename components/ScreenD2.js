import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function ScreenD2() {
  return (
    <View style={styles.screenD}>
      <Text style={styles.text}>Pantalla D2</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screenD: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#008000' },
  text: { fontSize: 18, margin: 10 },
});

export default ScreenD2;
