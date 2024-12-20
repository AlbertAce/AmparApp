import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SplashScreen } from './splash'
import { Pagina1Screen } from './pagina1'
import { Pagina2Screen } from './pagina2'

const Stack = createNativeStackNavigator();
function RootStack() {
  return (
    <Stack.Navigator initialRouteName='splash' screenOptions={{ headerStyle: { backgroundColor: 'floralwhite' } }}>
      <Stack.Screen name='splash' component={SplashScreen} options={{ title: 'Alto!! y a soplar' }}></Stack.Screen>
      <Stack.Screen name='pagina1' component={Pagina1Screen} options={{ title: 'Relaja' }}></Stack.Screen>
      <Stack.Screen name='pagina2' component={Pagina2Screen} options={{ title: 'Así va la cosa' }}></Stack.Screen>
    </Stack.Navigator>
  )



}

export default function App() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>);


}