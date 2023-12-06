import { Box, Flex, Heading, Link, Text } from '@chakra-ui/react';
import Image from 'next/image';

import underConstruction from '../../../../public/Under construction-amico.svg';
import MotionBox from '~/lib/components/motion/Box';

const Maintenance = () => {
  return (
    <Flex minHeight="70vh" direction="column" justifyContent="center">
      <MotionBox
        animate={{ y: 20 }}
        transition={{ repeat: Infinity, duration: 2, repeatType: 'reverse' }}
        width={{ base: '100%', sm: '70%', md: '60%' }}
        margin="0 auto"
        display="flex"
        justifyContent="center"
      >
        <Image src={underConstruction} alt="Error 404 not found Illustration" />
      </MotionBox>
      <Text textAlign="center" fontSize="xs" color="gray">
        <Link
          href="https://stories.freepik.com/web"
          isExternal
          rel="noopener noreferrer"
        >
          Illustration par Freepik Stories
        </Link>
      </Text>

      <Box marginY={4}>
        <Heading textAlign="center" size="lg">
          Construction en Cours
        </Heading>

        <Box textAlign="center" marginTop={4}>
          <Text variant="body1" textAlign="center" mt={2}>
            Nous nous excusons pour la gêne occasionnée. Le site web est
            actuellement en cours de maintenance. Nous vous invitons à le
            consulter ultérieurement.
          </Text>
        </Box>
      </Box>
    </Flex>
  );
};

export default Maintenance;
