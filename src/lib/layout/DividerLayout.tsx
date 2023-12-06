'use client';

import { Box, Container, Heading, Text } from '@chakra-ui/react';
import type React from 'react';

interface Props {
  title?: string;
  content?: string;
  mainTitle?: boolean;
  containerSize?: string | number;
}

const DividerWithText: React.FC<Props> = (props: Props): JSX.Element => {
  const { title, content, mainTitle, containerSize } = props;

  if (mainTitle) {
    return (
      <Container
        paddingTop={4}
        paddingBottom="3em"
        display="flex"
        alignItems="center"
        position="relative"
        flexDirection="column"
        minWidth={{ md: containerSize }}
      >
        <Heading
          fontWeight="bold"
          letterSpacing="0.4em"
          fontSize={{ base: '1rem', md: '2rem' }}
          textTransform="uppercase"
          textAlign="center"
          color="f4f4f4"
        >
          {title}
        </Heading>
        <Box paddingTop={3} borderBottom="5px solid #db8024" width="15rem" />
        {content ? (
          <Text
            paddingTop={5}
            paddingBottom={2}
            fontSize="1rem"
            fontFamily="Roboto, sans-serif"
            color="f4f4f4"
          >
            {content}
          </Text>
        ) : null}
      </Container>
    );
  }

  return <Box>{content || ''}</Box>;
};

export default DividerWithText;
