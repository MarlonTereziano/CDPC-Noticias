import { createStackNavigator } from '@react-navigation/stack';
import {Welcome} from '../pages/Welcome';
import React from 'react';


const App = createStackNavigator();

export const AppRoutes: React.FC = () => {
    return(
        <App.Navigator>

                {/* Rotas que podem ser utilizadas com ou sem autenticação */}

                <App.Screen name="Welcome" component={Welcome} />      

                {/* Rotas que podem ser utilizadas com ou sem autenticação */}
 
        </App.Navigator>
    );
}


