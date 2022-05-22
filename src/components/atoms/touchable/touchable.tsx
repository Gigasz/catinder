import React from 'react';

import {
  TouchableOpacity, ViewStyle,
} from 'react-native';

export interface TouchableProps extends ViewStyle {
  children?: React.ReactNode,
  onPress?: () => void;
  disabled?: boolean;
}

export function Touchable({
  children,
  onPress,
  disabled,
  ...props
}: TouchableProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={props}
    >
      {children}
    </TouchableOpacity>
  );
}
