import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AppHeader() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Mobile Academy</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EE9972',
    padding: 20,
  },
  headerText: {
    fontSize: 30,
    color: '#EDEFEE',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
