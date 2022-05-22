// Arquivo para declarar os parâmetros recebidos em cada rota

import { RootNavigatorRoutes, BottomTabNavigatorRoutes, CatsListNavigator } from './routes';

export type MainNavigatorParamsList = {
  [RootNavigatorRoutes.SPLASH]: undefined;
  [RootNavigatorRoutes.MAIN_NAVIGATOR]: undefined;
};

export type BottomTabNavigatorParamsList = {
  [BottomTabNavigatorRoutes.CATS_LIST]: undefined;
  [BottomTabNavigatorRoutes.CHAT]: undefined;
  [BottomTabNavigatorRoutes.PROFILE]: undefined;
};

export type CatsListNavigatorParamsList = {
  [CatsListNavigator.BROWSE_CATS]: undefined;
  [CatsListNavigator.FAVORITE_CATS]: undefined;
};
