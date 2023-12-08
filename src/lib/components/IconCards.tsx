'use client';

import {
  Card,
  CardBody,
  Container,
  Grid,
  GridItem,
  Stack,
  Text,
} from '@chakra-ui/react';
import type { StaticImageData } from 'next/image';
import Image from 'next/image';

import contactCircle from '../../../public/img/contactcircle.png';
import pinCircle from '../../../public/img/pincircle.png';
import starcircle from '../../../public/img/starcircle.png';

interface IconConfig {
  title: string;
  id: string;
  icon: StaticImageData | string;
  description: string;
}
const iconInfos: IconConfig[] = [
  {
    title: 'Nous trouver',
    id: '1',
    icon: pinCircle,
    description: "1 Rue d'Anjou 35140 SAINT-AUBIN-DU-CORMIER",
  },
  {
    title: 'Nous contacter',
    id: '2',
    icon: contactCircle,
    description: '02 99 39 72 52 oraltec@orange.fr',
  },
  {
    title: 'Notre expertise',
    id: '3',
    icon: starcircle,
    description:
      'Spécialisé dans la prothèse adjointe, notre laboratoire garantit des résultats esthétiques et fonctionnels',
  },
];

function GenerateCard(): JSX.Element {
  return (
    <>
      {iconInfos.map((iconInfo: IconConfig) => {
        return (
          <GridItem key={iconInfo.id} w="100%" maxW="1080px">
            <Card
              boxShadow="none"
              textAlign="center"
              backgroundColor="transparent"
            >
              <CardBody>
                <Stack
                  marginTop={{ base: '-60px', md: '-90px' }}
                  minW={150}
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  alignContent="center"
                >
                  <Image src={iconInfo.icon} alt={iconInfo.title} />
                  <Text
                    fontSize={16}
                    fontWeight="bold"
                    marginTop="30px"
                    textTransform="uppercase"
                  >
                    {iconInfo.title}
                  </Text>
                  <Text>{iconInfo.description}</Text>
                </Stack>
              </CardBody>
            </Card>
          </GridItem>
        );
      })}
    </>
  );
}
const IconCards = () => {
  return (
    <Container maxW="8xl">
      <Grid
        templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }}
        gap={{ base: 30, md: 3 }}
      >
        <GenerateCard />
      </Grid>
    </Container>
  );
};

export default IconCards;
