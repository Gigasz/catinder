import React from 'react';

import { Page } from 'components/molecules';
import { Text, Box } from 'components/atoms';

export function ProfilePage(): JSX.Element {
  return (
    <Page>
      <Box
        flex={1}
        alignItems="center"
        padding={36}
      >
        <Text style={{ fontSize: 126, fontWeight: 'bold', color: '#BFBFC0' }}>
          02
        </Text>
      </Box>
    </Page>
  );
}
