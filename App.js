import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';

import { AnimatedDemo } from "./AnimatedDemo";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Demo w/ Expo & react-native-animated v2</Text>
      <Text style={styles.text}>Issue #1364</Text>
      <StatusBar style="auto" />
      <AnimatedDemo />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  text: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 10
  }
});
