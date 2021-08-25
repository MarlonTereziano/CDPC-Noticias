import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Routes from './routes';
import 'react-native-gesture-handler';
import AppProvider from './hooks'

export default function App() {
  return (
    <>
      <AppProvider>
        <Routes/>
      </AppProvider>
    </>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   text: {
//     fontSize: 16,
//   },
// });

//2021
