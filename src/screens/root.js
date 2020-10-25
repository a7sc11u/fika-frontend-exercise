import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { LOADING_ROUTE, MOVIES_ROUTE } from '../constants/navigation';

import { LoadingScreen } from './loading';
import { MoviesScreen } from './movies';

const Stack = createStackNavigator();

export const Root = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={LOADING_ROUTE}>
        <Stack.Screen 
          name={LOADING_ROUTE} 
          component={LoadingScreen} 
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen 
          name={MOVIES_ROUTE} 
          component={MoviesScreen} 
          options={{
            title: 'FikaSearch',
            headerLeft: null,
            gesturesEnabled: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}