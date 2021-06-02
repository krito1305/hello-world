import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import styles from "./my-style";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Welcome to IS657 from Carolina Barrera Martin</Text>
      <StatusBar style="auto" />
    </View>
  );
};