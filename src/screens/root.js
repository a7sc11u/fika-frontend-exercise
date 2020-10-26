import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { ROUTE_MOVIES } from '../constants/navigation';

import { MoviesScreen } from './movies';

const Stack = createStackNavigator();

export const Root = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={ROUTE_MOVIES}>
        <Stack.Screen 
          name={ROUTE_MOVIES} 
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