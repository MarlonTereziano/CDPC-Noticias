import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Welcome } from '../pages/Welcome';
import { useFonts } from 'expo-font';


const Routes: React.FC = () => {
    const [loaded] = useFonts({
        'AGENCYR': require('../assets/AGENCYR.ttf'),
        'AGENCYB': require('../assets/AGENCYB.ttf'),
      });
      
      if (!loaded) {
        return null;
      }

    const Stack = createStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Welcome">
                <Stack.Screen name="Welcome" options={{headerShown: false}} component={Welcome}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
    
};

export default Routes;