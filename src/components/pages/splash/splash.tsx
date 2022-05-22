import React, { useEffect, useState } from 'react';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

import { MainNavigatorParamsList } from 'navigation/config/routesParams';
import { RootNavigatorRoutes } from 'navigation/config/routes';

import { fetchInitialCatList } from 'store/actions/cats-list-actions';
import { useAppDispatch } from 'store';
import { AnyAction } from 'redux';
import { Page } from 'components/molecules';
import { Box } from 'components/atoms';
import LottieView from 'lottie-react-native';

import LoadingAnimation from 'assets/animations/loading.json';

type SplashProps = BottomTabScreenProps<MainNavigatorParamsList, RootNavigatorRoutes.SPLASH>;

export function SplashPage({
  navigation,
}: SplashProps): JSX.Element {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(
      fetchInitialCatList(
        () => { navigation.navigate(RootNavigatorRoutes.MAIN_NAVIGATOR); },
        () => { navigation.navigate(RootNavigatorRoutes.MAIN_NAVIGATOR); },
      ) as unknown as AnyAction,
    );
  }, []);
  return (
    <Page>
      <Box
        flex={1}
        alignItems="center"
        justifyContent="center"
        padding={36}
      >
        <LottieView
          source={LoadingAnimation}
          style={{ flex: 1 }}
          autoPlay
          loop
        />
      </Box>
    </Page>
  );
}
