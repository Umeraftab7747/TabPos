/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
import React from 'react';
const Stack = createStackNavigator();
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// TAb navigations

import {DrawerNavigator} from './DrawerNavigator';

// SCREENS

export const ScreenNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="DrawerNavigator"
          component={DrawerNavigator}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
