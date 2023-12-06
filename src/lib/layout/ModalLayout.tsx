'use client';

import { Box, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import type React from 'react';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import CarouselLayout from './CarouselLayout';
import DividerWithText from './DividerLayout';

interface Props {
  serviceDetails: Service;
}

interface Service {
  servicePicture: string;
  title: string;
  id: number;
  icon: string;
  imagesUrls: string[];
  content: string;
}

const ModalLayout: React.FC<Props> = (props: Props) => {
  const { serviceDetails } = props;

  return (
    <Stack textAlign="center">
      <DividerWithText
        title={serviceDetails.title}
        mainTitle
        containerSize="5xl"
      />
      <SimpleGrid columns={{ base: 1, md: 2 }} gap={20}>
        <Box>
          <CarouselLayout imagesUrls={serviceDetails.imagesUrls} />
        </Box>
        <Box display="flex" alignItems="center">
          <Text>{serviceDetails.content}</Text>
        </Box>
      </SimpleGrid>
    </Stack>
  );
};

export default ModalLayout;
