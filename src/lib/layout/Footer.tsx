import { Box, Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box textAlign="center">
      <Text fontSize="1rem">
        {`${new Date().getFullYear() - 1}-${new Date().getFullYear()}`} ©
        Laboratoire Oraltec - Tous droits réservés
      </Text>
      <Box
        borderBottom="5px solid #db8024"
        width="auto"
        pt={1}
        textAlign="center"
      />
    </Box>
  );
};

export default Footer;
