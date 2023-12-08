'use client';

import { Box } from '@chakra-ui/react';
import { usePathname } from 'next/navigation';

import NavBar from './NavBar';

const Header = () => {
  const pathname = usePathname();
  if (pathname !== '/') {
    return null;
  }
  return (
    <Box as="header" width="full">
      <NavBar />
    </Box>
  );
};

export default Header;
