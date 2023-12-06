'use client';

import { Box } from '@chakra-ui/react';
import type React from 'react';

import DividerWithText from './DividerLayout';

interface Props {
  sections: React.ReactElement;
  title?: string;
  content?: string;
  backgroundColor: string;
  mainTitle?: boolean;
  id?: string;
}

const SectionLayout: React.FC<Props> = (props: Props) => {
  const { sections, title, content, mainTitle, id, backgroundColor } = props;

  return (
    <Box
      id={id}
      backgroundColor={backgroundColor}
      paddingTop={30}
      paddingBottom={50}
    >
      <DividerWithText
        title={title || ''}
        content={content || ''}
        mainTitle={mainTitle}
      />
      {sections}
    </Box>
  );
};

export default SectionLayout;
