'use client';

import { Box, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';

interface Props {
  imagesUrls: string[];
}

const CarouselLayout: React.FC<Props> = (props: Props) => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const { imagesUrls } = props;

  const slidesCount = imagesUrls.length;

  const prevSlide = () => {
    setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
  };

  const carouselStyle = {
    transition: 'all .5s',
    ml: `-${currentSlide * 100}%`,
  };
  return (
    <Flex
      w="full"
      bg="#edf3f8"
      _dark={{
        bg: '#3e3e3e',
      }}
      alignItems="center"
      justifyContent="center"
    >
      <Flex w="full" overflow="hidden" pos="relative">
        <Flex h="400px" w="full" {...carouselStyle}>
          {imagesUrls.map((img, sid) => (
            <Box
              key={`slide-${img}-${sid + 1}`}
              boxSize="full"
              shadow="md"
              flex="none"
            >
              <Text
                color="white"
                fontSize="xs"
                p="8px 12px"
                pos="absolute"
                top="0"
              >
                {sid + 1} / {slidesCount}
              </Text>
              <Image
                src={img}
                alt="carousel image"
                boxSize="full"
                objectFit="cover"
              />
            </Box>
          ))}
        </Flex>
        <Text
          cursor="pointer"
          pos="absolute"
          top="50%"
          w="auto"
          mt="-22px"
          p="16px"
          color="white"
          fontWeight="bold"
          fontSize="18px"
          transition="0.6s ease"
          borderRadius="0 3px 3px 0"
          userSelect="none"
          _hover={{
            opacity: 0.8,
            bg: 'black',
          }}
          left="0"
          onClick={prevSlide}
        >
          &#10094;
        </Text>
        <Text
          cursor="pointer"
          pos="absolute"
          top="50%"
          w="auto"
          mt="-22px"
          p="16px"
          color="white"
          fontWeight="bold"
          fontSize="18px"
          transition="0.6s ease"
          borderRadius="0 3px 3px 0"
          userSelect="none"
          _hover={{
            opacity: 0.8,
            bg: 'black',
          }}
          right="0"
          onClick={nextSlide}
        >
          &#10095;
        </Text>
      </Flex>
    </Flex>
  );
};

export default CarouselLayout;
