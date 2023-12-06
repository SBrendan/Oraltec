'use client';

import {
  Avatar,
  Container,
  Grid,
  GridItem,
  Stack,
  Text,
} from '@chakra-ui/react';
import type React from 'react';

import TitleWithLine from '../layout/TitleWithLine';

const girlsIcon =
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80';

const peoples = [
  {
    name: 'Laurent Théron',
    id: '1',
    profilePicture:
      'https://images.unsplash.com/photo-1559548331-f9cb98001426?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    jobsCategory: "Chef d'entreprise",
    colSpan: 2,
    colStart: 2,
    rowStart: 1,
  },
  {
    name: 'Noémie Remy',
    id: '2',
    profilePicture: girlsIcon,
    jobsCategory: "Chef d'entreprise",
    colSpan: 2,
    colStart: 3,
    rowStart: 1,
  },
  {
    name: 'Bélinda Bernard',
    id: '3',
    profilePicture: girlsIcon,
    jobsCategory: 'Montages/Gouttières/Polissage',
    colSpan: 1,
    colStart: 1,
    rowStart: 2,
  },
  {
    name: 'Carole Viel',
    id: '4',
    profilePicture: girlsIcon,
    jobsCategory: 'Finitions de Cire/Polissage',
    colSpan: 1,
    rowStart: 2,
    colStart: 2,
  },
  {
    name: 'Clotilde Boudet-Costantini',
    id: '5',
    profilePicture: girlsIcon,
    jobsCategory: "PEI/Cire d'occlusion/Finitions de Cire",
    colSpan: 1,
    colStart: undefined,
    rowStart: 2,
  },
  {
    name: 'Emilie',
    id: '6',
    profilePicture: girlsIcon,
    jobsCategory: "PEI/Cire d'occlusion/Finitions de Cire",
    colSpan: 1,
    colStart: undefined,
    rowStart: 2,
  },
  {
    name: 'Valérie',
    id: '7',
    profilePicture: girlsIcon,
    jobsCategory: 'Plâtrière',
    colSpan: 1,
    colStart: undefined,
    rowStart: 2,
  },
];

const GenerateCard = () => {
  return (
    <>
      {peoples.map((people) => {
        return (
          <GridItem
            key={people.id}
            colSpan={{ md: people.colSpan }}
            rowSpan={{ md: 1 }}
            paddingTop={10}
            rowStart={{ md: people.rowStart }}
            colStart={{ md: people.colStart }}
          >
            <Stack
              display="flex"
              flexDirection="column"
              alignItems="center"
              alignContent="center"
            >
              <Avatar
                name={people.name}
                src={people.profilePicture}
                width={120}
                height={120}
                margin="auto"
              />
              <Text
                textAlign="center"
                fontSize={14}
                fontWeight="bold"
                marginTop="0.5em"
                textTransform="uppercase"
              >
                {people.name}
              </Text>
              <Text textAlign="center" color="#242626" fontSize={13}>
                {people.jobsCategory}
              </Text>
            </Stack>
          </GridItem>
        );
      })}
    </>
  );
};

const Team: React.FC = () => {
  return (
    <Container
      marginBottom={5}
      maxW={{ base: 'container.sm', md: 'container.xl' }}
      paddingTop={50}
    >
      <TitleWithLine titleWithLine='"notre équipe"' />
      <Grid
        templateRows={{ base: 'repeat(3, 1fr)', md: 'repeat(2, 1fr)' }}
        templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(5, 2fr)' }}
      >
        <GenerateCard />
      </Grid>
    </Container>
  );
};

export default Team;
