import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Routes from './routes';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';


export default function App() {
  return (
    <NavigationContainer>
    <View style={styles.container}>
    <Routes/>
      <Text style={styles.text}>👋ll</Text>
    </View>
    </NavigationContainer>
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
