import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Routes from './routes';
import 'react-native-gesture-handler';

export default function App() {
  return (
    <>
      <Routes/>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
  },
});
