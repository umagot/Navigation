import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function ScreenC2() {
  return (
    <View style={styles.screenC}>
      <Text style={styles.text}>Pantalla C2</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screenC: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFFF00' },
  text: { fontSize: 18, margin: 10 },
});

export default ScreenC2;
