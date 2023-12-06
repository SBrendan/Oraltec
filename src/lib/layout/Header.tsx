import { Box } from '@chakra-ui/react';

import NavBar from './NavBar';

const Header = () => {
  return (
    <Box as="header" width="full">
      <NavBar />
    </Box>
  );
};

export default Header;
