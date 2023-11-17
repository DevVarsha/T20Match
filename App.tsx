import React, { useEffect, useState } from 'react';
import { Alert, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Toast from "react-native-toast-message"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
const Stack = createNativeStackNavigator();

const App = () => {

  return (<>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="T20 Match" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
    <Toast />
  </>);


}


export default App;
