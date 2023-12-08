'use client';

import { Box } from '@chakra-ui/react';
import type { ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box as="main" margin="0 auto" transition="0.5s ease-out">
      <Box>{children}</Box>
    </Box>
  );
};

export default Layout;
