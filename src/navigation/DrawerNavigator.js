import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

import {DrawerScreen} from '../screens/DrawerScreen';
import {Screenone} from '../screens';
import {Screentwo} from '../screens';

export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      openByDefault={false}
      drawerContent={(props) => <DrawerScreen {...props} />}>
      <Drawer.Screen name="Screenone" component={Screenone} />
      <Drawer.Screen name="Screentwo" component={Screentwo} />
    </Drawer.Navigator>
  );
};
