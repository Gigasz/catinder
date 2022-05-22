// Arquivo para declarar os parâmetros recebidos em cada rota

import { NavigatorRoutes } from './routes';

export type NavigatorParamsList = {
  [NavigatorRoutes.SPLASH]: undefined;
  [NavigatorRoutes.CATS_LIST]: undefined;
  [NavigatorRoutes.FAVORITES]: undefined;
  [NavigatorRoutes.CHAT]: undefined;
  [NavigatorRoutes.PROFILE]: undefined;
};
