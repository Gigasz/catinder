import React from 'react';
import FastImage, {
  OnLoadEvent, OnProgressEvent, ResizeMode, Source, ImageStyle,
} from 'react-native-fast-image';
import { LayoutChangeEvent } from 'react-native';

export interface ImageProps extends Omit<ImageStyle, 'tintColor'> {
  source: Source;
  resizeMode?: ResizeMode;
  fallback?: boolean;
  onLoadStart?(): void;
  onProgress?(event: OnProgressEvent): void;
  onLoad?(event: OnLoadEvent): void;
  onError?(): void;
  onLoadEnd?(): void;
  onLayout?: (event: LayoutChangeEvent) => void;
  tintColor?: string;
  testID?: string;
  children?: React.ReactNode;
}

export function Image({
  source,
  resizeMode,
  fallback,
  onLoadStart,
  onProgress,
  onLoad,
  onError,
  onLoadEnd,
  onLayout,
  tintColor,
  testID,
  children,
  ...props
}: ImageProps): JSX.Element {
  return (
    <FastImage
      source={source}
      resizeMode={resizeMode}
      fallback={fallback}
      onLoadStart={onLoadStart}
      onProgress={onProgress}
      onLoad={onLoad}
      onError={onError}
      onLoadEnd={onLoadEnd}
      onLayout={onLayout}
      tintColor={tintColor}
      testID={testID}
      style={props}
    >
      {children}
    </FastImage>
  );
}
