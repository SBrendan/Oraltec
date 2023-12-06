'use client';

import { Box, Container, Image, SimpleGrid, Text } from '@chakra-ui/react';
import type React from 'react';

import TitleWithLine from '../layout/TitleWithLine';

const Hardware: React.FC = () => {
  return (
    <Container maxW="7xl" pt={50} pb={30}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={20}>
        <Box>
          <TitleWithLine title="matériel" titleWithLine='"informatique"' />
          <Text>
            Explorez notre laboratoire Oraltec, équipé de technologies de pointe
            pour une fabrication de prothèses dentaires inégalée. Notre scanner
            dentaire haute précision capture les détails anatomiques essentiels,
            tandis que notre imprimante 3D de résine donne vie à des modèles
            dentaires précis. De plus, notre utilisation experte de la
            modélisation nous permet de concevoir des châssis sur mesure,
            assurant une adaptation parfaite et une fonctionnalité optimale pour
            chaque prothèse. Avec ces équipements de pointe, nous nous engageons
            à offrir des solutions dentaires personnalisées et de la plus haute
            qualité.
          </Text>
        </Box>
        <Box display="flex" justifyContent="center">
          <Image alt="Imprimante 3D Next Dent" src="img/product.jpg" />
        </Box>
      </SimpleGrid>
    </Container>
  );
};

export default Hardware;
