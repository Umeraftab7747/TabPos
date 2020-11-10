import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

import {DrawerScreen} from '../screens/DrawerScreen';
import {Screenone} from '../screens';
import {Screentwo} from '../screens';
import {Screenthree} from '../screens';
import {screenfour} from '../screens';
import {ScreenFive} from '../screens';

export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      openByDefault={false}
      drawerContent={(props) => <DrawerScreen {...props} />}>
      <Drawer.Screen name="Screenone" component={Screenone} />
      <Drawer.Screen name="Screentwo" component={Screentwo} />
      <Drawer.Screen name="Screenthree" component={Screenthree} />
      <Drawer.Screen name="screenfour" component={screenfour} />
      <Drawer.Screen name="ScreenFive" component={ScreenFive} />
    </Drawer.Navigator>
  );
};
