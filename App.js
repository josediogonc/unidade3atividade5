import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as PaperProvider, Badge  } from 'react-native-paper';

import Tela1 from './src/Tela1';
import Tela2 from './src/Tela2';


const Stack = createStackNavigator();

function Myapp() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Tela1" component={Tela1} />
          <Stack.Screen name="Tela2" component={Tela2} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  )
}

export default Myapp;