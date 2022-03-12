import { StyleSheet, Text, View , Dimensions, SafeAreaView, StatusBar} from 'react-native';
import MapView from 'react-native-maps';
import * as Location from 'expo-location';
import { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux'
import store from './utils/redux/store'
import pages from './pages'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store} >
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Detail' >
          {
            pages.map((e,i) => (
              <Stack.Screen key={i} name={e.name} options={{headerShown: false}} component={e.component} />
            ))
          }
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
