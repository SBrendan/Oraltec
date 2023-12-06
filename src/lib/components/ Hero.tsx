'use client';

import { Box, chakra, Container, Heading, Stack, Text } from '@chakra-ui/react';

const Hero = () => {
  return (
    <Box
      bgImage="url('https://images.unsplash.com/photo-1621516799962-7dad52802428?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      p={6}
    >
      <Container p={{ base: 8, sm: 14 }}>
        <Stack direction="column" spacing={6} alignItems="center">
          <Heading
            fontSize={{ base: '4xl', sm: '5xl' }}
            fontWeight="bold"
            textAlign="center"
            maxW="600px"
          >
            Laboratoire Oraltec spécialisé en{' '}
            <chakra.span
              color="#ffd597"
              bg="linear-gradient(transparent 50%, #db8024 50%)"
            >
              prothése adjointe
            </chakra.span>
          </Heading>
          <Text maxW="550px" fontSize="xl" textAlign="center" color="teal.900">
            Oraltec excelle dans la fabrication de prothèses dentaires sur
            mesure, alliant artisanat traditionnel et technologies innovantes.
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

export default Hero;
