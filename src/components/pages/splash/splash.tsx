import React, { useEffect, useState } from 'react';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

import { View } from 'react-native';
import { MainNavigatorParamsList } from 'navigation/config/routesParams';
import { RootNavigatorRoutes } from 'navigation/config/routes';
import api from 'services/api';

type SplashProps = BottomTabScreenProps<MainNavigatorParamsList, RootNavigatorRoutes.SPLASH>;

export function SplashPage({
  navigation,
}: SplashProps): JSX.Element {
  const [cats, setCats] = useState([]);
  useEffect(() => {
    api.get('/images/search', {
      params: {
        size: 'full',
        page: 0,
        limit: 30,
      },
    })
      .then((r) => {
        console.log(r.data);
        navigation.navigate(RootNavigatorRoutes.MAIN_NAVIGATOR);
      }).catch((e) => {
        console.log(e);
      });
  }, []);
  return (
    <View />
  );
}
