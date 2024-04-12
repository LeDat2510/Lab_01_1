import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/HomeScreen';
import Project2Screen from './src/Project2';
import Project1Screen from './src/Project1';
import Project3Screen from './src/Project3';
import Project4Screen from './src/Project4';
import Project5Screen from './src/Project5';
import Project6Screen from './src/Project6';
import Project7Screen from './src/Project7';
import Project8Screen from './src/Project8';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='Project1' component={Project1Screen} />
        <Stack.Screen name='Project2' component={Project2Screen} />
        <Stack.Screen name='Project3' component={Project3Screen} />
        <Stack.Screen name='Project4' component={Project4Screen} />
        <Stack.Screen name='Project5' component={Project5Screen} />
        <Stack.Screen name='Project6' component={Project6Screen} />
        <Stack.Screen name='Project7' component={Project7Screen} />
        <Stack.Screen name='Project8' component={Project8Screen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

