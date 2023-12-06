'use client';

import { Divider, Text } from '@chakra-ui/react';
import type React from 'react';

interface Props {
  title?: string;
  titleWithLine: string;
}

const TitleWithLine: React.FC<Props> = (props: Props) => {
  const { title, titleWithLine } = props;

  if (title) {
    return (
      <>
        <Text
          fontWeight="bold"
          letterSpacing="0.1rem"
          fontSize="1.6rem"
          textTransform="uppercase"
          color="#db8024"
          marginBottom="10px"
        >
          {title}
        </Text>
        <Divider
          border="none"
          borderTop="4px solid #333"
          color="#333"
          overflow="visible"
          textAlign="left"
          height={5}
          marginBottom={30}
          width="100%"
          margin={0}
          _after={{
            background: '#f5f5f5',
            content: titleWithLine,
            padding: '0px 10px 0px 0px',
            position: 'relative',
            height: '50px',
            top: '-21px',
            fontWeight: 'bold',
            letterSpacing: '0.1rem',
            fontSize: '1.6rem',
            textTransform: 'uppercase',
            color: '#db8024',
          }}
        />
      </>
    );
  }

  return (
    <Divider
      border="none"
      borderTop="4px solid #333"
      color="#333"
      overflow="visible"
      textAlign="left"
      height={5}
      marginBottom={30}
      width="100%"
      margin={0}
      _after={{
        background: '#f5f5f5',
        content: titleWithLine,
        padding: '0px 10px 0px 0px',
        position: 'relative',
        height: '50px',
        top: '-21px',
        fontWeight: 'bold',
        letterSpacing: '0.1rem',
        fontSize: '1.6rem',
        textTransform: 'uppercase',
        color: '#db8024',
      }}
    />
  );
};

export default TitleWithLine;
