import { View, Text } from 'react-native'
import React from 'react'
import Register from './screen/Register'
import Login from './screen/Login'
import DeatailsAdd from './screen/DeatailsAdd'
import ManageDetailsPage from './screen/ManageDetailsPage'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="DeatailsAdd" component={DeatailsAdd} />
        <Stack.Screen name="ManageDetailsPage" component={ManageDetailsPage} />
      </Stack.Navigator>
  </NavigationContainer>
  
  )
}