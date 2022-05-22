import React, { useEffect, useState } from 'react';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

import { View } from 'react-native';
import { NavigatorParamsList } from 'navigation/config/routesParams';
import { NavigatorRoutes } from 'navigation/config/routes';
import api from 'services/api';

type SplashProps = BottomTabScreenProps<NavigatorParamsList, NavigatorRoutes.CATS_LIST>;

export const CatsListPage = ({
  navigation,
}: SplashProps): JSX.Element => {
  return (
    <View />
  )
};
