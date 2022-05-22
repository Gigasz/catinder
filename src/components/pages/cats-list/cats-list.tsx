import React, { useRef } from 'react';

import { useAppSelector } from 'store';

import { Box, Image, Touchable } from 'components/atoms';
import { Page } from 'components/molecules';
import Swiper from 'react-native-deck-swiper';
import { SvgXml } from 'react-native-svg';
import Dislike from 'assets/svg/dislike.svg';
import Like from 'assets/svg/like.svg';

export function CatsListPage(): JSX.Element {
  const { cats_list } = useAppSelector((state) => state.catsListState);
  const swiperRef = useRef<Swiper<never>>();

  const handleLike = (index) => {
    console.log('liked: ', cats_list[index]);
  };

  return (
    <Page>
      <Box
        flex={1}
        alignItems="center"
        justifyContent="center"
      >
        <Box
          width="100%"
          flex={1}
          alignItems="center"
          justifyContent="center"
        >
          <Swiper
            ref={swiperRef}
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
            cardIndex={0}
            stackSize={10}
            stackSeparation={0}
            showSecondCard
            onSwipedRight={handleLike}
            horizontalSwipe
            verticalSwipe={false}
            animateOverlayLabelsOpacity
            overlayOpacityHorizontalThreshold={10}
            inputOverlayLabelsOpacityRangeX={[-50, -10, 0, 10, 50]}
            outputOverlayLabelsOpacityRangeX={[1, 0, 0, 0, 1]}
            overlayLabels={{
              right: {
                title: 'LIKE',
                style: {
                  label: {
                    borderColor: '#6BD88E',
                    color: '#6BD88E',
                    borderWidth: 1,
                  },
                  wrapper: {
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                  },
                },
              },
              left: {
                title: 'DISLIKE',
                style: {
                  label: {
                    borderColor: '#E16359',
                    color: '#E16359',
                    borderWidth: 1,
                  },
                  wrapper: {
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                  },
                },
              },
            }}
          />
        </Box>
        <Box
          flexDirection="row"
          width="100%"
          marginBottom={96}
          justifyContent="center"
        >
          <Touchable
            backgroundColor="#fff"
            width={54}
            height={54}
            borderRadius={27}
            alignItems="center"
            justifyContent="center"
            onPress={() => {
              swiperRef?.current?.swipeLeft();
            }}
            marginRight={8}
          >
            <SvgXml xml={Dislike} />
          </Touchable>
          <Touchable
            backgroundColor="#fff"
            width={54}
            height={54}
            borderRadius={27}
            alignItems="center"
            justifyContent="center"
            onPress={() => {
              swiperRef?.current?.swipeRight();
            }}
            marginLeft={8}
          >
            <SvgXml xml={Like} />
          </Touchable>
        </Box>
      </Box>
    </Page>
  );
}
