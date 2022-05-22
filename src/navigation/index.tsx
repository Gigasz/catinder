/* eslint-disable no-nested-ternary */
import * as React from 'react';
import { NavigationContainer, RouteProp } from '@react-navigation/native';
import { BottomTabNavigationOptions, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator, NativeStackNavigationOptions } from '@react-navigation/native-stack';
import {
  CatsListPage, MessagesPage, ProfilePage, SplashPage,
} from 'components/pages';
import { SvgXml } from 'react-native-svg';

import CatPaw from 'assets/svg/cat-paw.svg';
import MessageCircle from 'assets/svg/message-circle.svg';
import User from 'assets/svg/user.svg';

import { BottomTabNavigatorRoutes, RootNavigatorRoutes } from './config/routes';
import { BottomTabNavigatorParamsList } from './config/routesParams';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const bottomTabRouteIcons: {
  [key in BottomTabNavigatorRoutes]: string;
} = {
  [BottomTabNavigatorRoutes.CATS_LIST]: CatPaw,
  [BottomTabNavigatorRoutes.CHAT]: MessageCircle,
  [BottomTabNavigatorRoutes.PROFILE]: User,
};

const bottomTabNavigatorOptions = ({
  route,
}: {
  route: RouteProp<BottomTabNavigatorParamsList, keyof BottomTabNavigatorParamsList>
}): BottomTabNavigationOptions => ({
  headerShown: false,
  tabBarIcon: ({ focused }) => (
    <SvgXml
      xml={bottomTabRouteIcons[route.name]}
      fill={route.name === BottomTabNavigatorRoutes.CATS_LIST ? focused ? '#EC537E' : '#434141' : undefined}
      stroke={route.name !== BottomTabNavigatorRoutes.CATS_LIST ? focused ? '#EC537E' : '#434141' : undefined}
    />
  ),
  tabBarLabel: () => null,
  tabBarStyle: {
    position: 'absolute',
    width: '40%',
    alignSelf: 'center',
    bottom: 32,
    borderRadius: 36,
    left: '30%',
    elevation: 2,
    shadowColor: '#BFBFC0',
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 0,
      height: 1,
    },
  },
});

const rootNavigatorOptions: NativeStackNavigationOptions = {
  headerShown: false,
};

function BottomTabNavigator() {
  return (
    <Tab.Navigator
      safeAreaInsets={{ bottom: 0 }}
      screenOptions={bottomTabNavigatorOptions as BottomTabNavigationOptions}
    >
      <Tab.Screen
        name={BottomTabNavigatorRoutes.CATS_LIST}
        component={CatsListPage}
      />
      <Tab.Screen
        name={BottomTabNavigatorRoutes.CHAT}
        component={MessagesPage}
      />
      <Tab.Screen
        name={BottomTabNavigatorRoutes.PROFILE}
        component={ProfilePage}
      />
    </Tab.Navigator>
  );
}

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={rootNavigatorOptions}>
        <Stack.Screen
          name={RootNavigatorRoutes.SPLASH}
          component={SplashPage}
        />
        <Stack.Screen
          name={RootNavigatorRoutes.MAIN_NAVIGATOR}
          component={BottomTabNavigator}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
