import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { BottomTabNavigationOptions, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CatsListPage, SplashPage } from 'components/pages';
import { NavigatorRoutes } from './config/routes';

const Tab = createBottomTabNavigator();

const options: BottomTabNavigationOptions = {
  headerShown: false,
}

const Router = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={options}>
        <Tab.Screen name={NavigatorRoutes.SPLASH} component={SplashPage} />
        <Tab.Screen name={NavigatorRoutes.CATS_LIST} component={CatsListPage} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Router;