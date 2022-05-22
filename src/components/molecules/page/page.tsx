import React from 'react';
import { Box } from 'components/atoms';

import { SafeAreaView } from 'react-native';

interface PageProps {
  children?: React.ReactNode;
}

export function Page({
  children,
}: PageProps) {
  return (
    <Box
      flex={1}
      backgroundColor="#E5E5E5"
    >
      <SafeAreaView style={{ flex: 1 }}>{children}</SafeAreaView>
    </Box>
  );
}
