import React, { useEffect, useState } from 'react';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

import { View } from 'react-native';
import { NavigatorParamsList } from 'navigation/config/routesParams';
import { NavigatorRoutes } from 'navigation/config/routes';
import api from 'services/api';

type SplashProps = BottomTabScreenProps<NavigatorParamsList, NavigatorRoutes.SPLASH>;

export const SplashPage = ({
  navigation,
}: SplashProps): JSX.Element => {
  const [cats, setCats] = useState([])
  useEffect(() => {
    api.get('/images/search', {
      params: {
        size: 'full',
        page: 0,
        limit: 30,
      }
    })
      .then((r) => {
        console.log(r.data);
      }).catch((e) => {
        console.log(e)
      })
  }, [])
  return (
    <View />
  )
};
