import React, { useEffect, useState } from 'react';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

import { BottomTabNavigatorParamsList } from 'navigation/config/routesParams';
import { BottomTabNavigatorRoutes } from 'navigation/config/routes';

import { useAppDispatch, useAppSelector } from 'store';

import { Box, Image } from 'components/atoms';
import { Page } from 'components/molecules';
import Swiper from 'react-native-deck-swiper';
import { fetchMoreCats } from 'store/actions/cats-list-actions';
import { AnyAction } from 'redux';

type SplashProps = BottomTabScreenProps<
BottomTabNavigatorParamsList,
BottomTabNavigatorRoutes.CATS_LIST
>;

export function CatsListPage({
  navigation,
}: SplashProps): JSX.Element {
  const { cats_list } = useAppSelector((state) => state.catsListState);
  const dispatch = useAppDispatch();

  const [page, setPage] = useState(0);

  useEffect(() => {
    if (page > 0) {
      dispatch(fetchMoreCats(page) as unknown as AnyAction);
    }
  }, [page]);

  return (
    <Page>
      <Box
        flex={1}
        alignItems="center"
        justifyContent="center"
      >
        <Swiper
          cards={cats_list}
          renderCard={(card) => (
            <Box
              overflow="hidden"
              borderRadius={16}
            >
              <Image
                source={{ uri: card.url }}
                width="100%"
                height={446}
                resizeMode="cover"
              />
            </Box>
          )}
          backgroundColor="transparent"
          onSwiped={(cardIndex) => { console.log(cardIndex); }}
          onSwipedAll={() => { console.log('onSwipedAll'); }}
          cardIndex={0}
          stackSize={1}
        />
      </Box>
    </Page>
  );
}
