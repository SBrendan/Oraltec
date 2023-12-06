'use client';

import { Box, Container, Image, SimpleGrid, Text } from '@chakra-ui/react';
import type React from 'react';

const WhoWeAre: React.FC = () => {
  return (
    <Container
      flexGrow={1}
      display="block"
      marginBottom={5}
      maxW="container.xl"
    >
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={20}>
        <Box>
          <Image
            alt="Image d'ilustration de prothèse"
            src="https://images.unsplash.com/photo-1584650589355-e891970a9081?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            objectFit="contain"
            width="100%"
          />
        </Box>
        <Text justifyContent="center" alignItems="center" display="flex">
          {`Oraltec, laboratoire de prothésiste dentaire spécialisé dans la
            prothèse adjointe, se distingue par son engagement envers
            l'excellence et l'innovation. Forts d'une équipe de prothésistes
            hautement qualifiés, nous combinons l'artisanat traditionnel avec
            les dernières avancées technologiques pour offrir des solutions sur
            mesure. Spécialistes des prothèses partielles et complètes,
            amovibles et sur implants, nous nous engageons à restaurer la
            fonctionnalité et l'esthétique dentaires de manière personnalisée.
            Notre recherche constante de perfectionnement garantit des résultats
            durables et esthétiquement impeccables, faisant d'Oraltec le
            partenaire de confiance pour les professionnels de la santé dentaire
            et leurs patients.`}
        </Text>
      </SimpleGrid>
    </Container>
  );
};

export default WhoWeAre;
