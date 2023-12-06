'use client';

import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Container,
  Grid,
  GridItem,
  Img,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Stack,
  Text,
} from '@chakra-ui/react';
import React from 'react';

import ModalLayout from '../layout/ModalLayout';

const icon = 'img/toothcircle.png';
const defaultImg =
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80';
const servicesDetails = [
  {
    servicePicture: '/img/barre-ilu.jpg',
    title: 'Barre implanto-portée',
    id: 1,
    icon,
    imagesUrls: [
      'img/barre-ilu.jpg',
      'img/barre-slider/1.jpg',
      'img/barre-slider/2.jpg',
    ],
    content: `
Découvrez la gamme de barres implantaires proposée par Oraltec. Conçues pour assurer une stabilité optimale, nos barres implantaires sur mesure offrent une intégration harmonieuse avec la morphologie de chaque patient. 
La précision de notre processus de fabrication et l'utilisation de matériaux de qualité garantissent une fonctionnalité fiable et une esthétique naturelle. 
Optez pour les barres implantaires d'Oraltec pour une solution avancée assurant la stabilité et le confort de vos prothèses dentaires.`,
  },
  {
    servicePicture: defaultImg,
    title: 'Prothèses adjointes complète et partielle',
    id: 2,
    icon,
    imagesUrls: [
      defaultImg,
      defaultImg,
      defaultImg,
      defaultImg,
      defaultImg,
      defaultImg,
    ],
    content: `Explorez la gamme de prothèses adjointes complètes et partielles proposée par Oraltec. Nos prothèses complètes sont conçues avec précision pour offrir un confort optimal et une esthétique naturelle. 
Pour les prothèses partielles, notre équipe qualifiée combine l'artisanat traditionnel avec des technologies avancées, créant des solutions sur mesure pour une intégration harmonieuse et une fonctionnalité optimale.
Choisissez Oraltec pour des prothèses adjointes personnalisées, alliant savoir-faire traditionnel et innovation technologique.`,
  },
  {
    servicePicture: defaultImg,
    title: 'Gouttières de blanchiment et de surélévation',
    id: 3,
    icon,
    imagesUrls: [
      defaultImg,
      defaultImg,
      defaultImg,
      defaultImg,
      defaultImg,
      defaultImg,
    ],
    content: `
Explorez la qualité des gouttières de blanchiment et de surélévation d'Oraltec. Nos gouttières de blanchiment sont conçues avec soin pour offrir une solution efficace et pratique, permettant aux patients d'atteindre des résultats esthétiques tout en garantissant leur confort. 
Les gouttières de surélévation, fabriquées sur mesure par notre équipe qualifiée, visent à améliorer la position dentaire avec précision. Optez pour les gouttières d'Oraltec pour une approche personnalisée, alliant fonctionnalité et résultats esthétiques.`,
  },
  {
    servicePicture: defaultImg,
    title: 'Réparation et adjonction',
    id: 4,
    icon,
    imagesUrls: [
      defaultImg,
      defaultImg,
      defaultImg,
      defaultImg,
      defaultImg,
      defaultImg,
    ],
    content: `
Explorez les services de réparation et d'adjonction offerts par Oraltec. Nos services de réparation garantissent une solution rapide et efficace pour restaurer la fonctionnalité des prothèses dentaires endommagées. 
L'adjonction, réalisée avec précision par notre équipe qualifiée, permet d'apporter des modifications personnalisées aux prothèses existantes. 
Optez pour les services de réparation et d'adjonction d'Oraltec pour une approche pratique et personnalisée, assurant la durabilité et la fonctionnalité de vos prothèses.`,
  },
  {
    servicePicture: 'img/chassis-ilu.jpg',
    title: 'Chassis métallique',
    id: 5,
    icon,
    imagesUrls: [
      'img/chassis-slider/1.jpg',
      'img/chassis-slider/2.jpg',
      'img/chassis-slider/3.jpg',
    ],
    content: `
Découvrez la qualité des châssis métalliques proposés par Oraltec. Nos châssis, méticuleusement conçus, assurent une base solide et durable pour les prothèses dentaires. 
Fabriqués sur mesure par notre équipe hautement qualifiée, les châssis métalliques d'Oraltec garantissent une adaptation précise et une fonctionnalité optimale. 
Optez pour nos châssis métalliques pour une solution fiable et personnalisée, répondant aux exigences spécifiques de chaque patient.`,
  },
  {
    servicePicture: defaultImg,
    title: 'Porte empreinte individuelle',
    id: 6,
    icon,
    imagesUrls: [
      defaultImg,
      defaultImg,
      defaultImg,
      defaultImg,
      defaultImg,
      defaultImg,
    ],
    content: `Explorez la précision des porte-empreintes individuels chez Oraltec. Nos porte-empreintes sont soigneusement conçus pour assurer une reproduction exacte de l'anatomie buccale de chaque patient. 
    Fabriqués sur mesure par notre équipe expérimentée, ces porte-empreintes garantissent une prise d'empreinte confortable et précise, contribuant ainsi à la création de prothèses dentaires sur mesure d'une grande qualité. 
    Optez pour les porte-empreintes individuels d'Oraltec pour une approche personnalisée et précise dans le processus de fabrication de prothèses.`,
  },
  {
    servicePicture: defaultImg,
    title: "Base d'oclusion",
    id: 7,
    icon,
    imagesUrls: [
      defaultImg,
      defaultImg,
      defaultImg,
      defaultImg,
      defaultImg,
      defaultImg,
    ],
    content: `
Découvrez la qualité de nos bases d'occlusion chez Oraltec. Nos bases d'occlusion, méticuleusement conçues, servent de fondement essentiel pour les prothèses dentaires, garantissant une adaptation précise à la structure buccale de chaque patient. 
Fabriquées sur mesure par notre équipe expérimentée, ces bases d'occlusion assurent une fonctionnalité optimale et un confort durable. 
Optez pour les bases d'occlusion d'Oraltec pour une solution fiable et personnalisée, répondant aux besoins spécifiques de chaque cas clinique.`,
  },
  {
    servicePicture: defaultImg,
    title: 'Impression de modèle 3D',
    id: 8,
    icon,
    imagesUrls: [
      defaultImg,
      defaultImg,
      defaultImg,
      defaultImg,
      defaultImg,
      defaultImg,
    ],
    content: `Explorez notre service d'impression de modèles 3D chez Oraltec. Nous utilisons des technologies avancées pour produire des modèles dentaires d'une précision exceptionnelle. 
    Notre équipe qualifiée assure une reproduction fidèle des détails anatomiques, permettant une planification précise pour la fabrication de prothèses dentaires sur mesure. 
    Optez pour notre service d'impression de modèles 3D chez Oraltec pour bénéficier d'une technologie de pointe au service de la qualité et de la précision dans la création de prothèses dentaires.`,
  },
];
interface Service {
  servicePicture: string;
  title: string;
  id: number;
  icon: string;
  imagesUrls: string[];
  content: string;
}

interface Props {
  services: Service[];
  serviceActive: Service;
  handleOpen: (id: number) => void;
  isOpen: boolean;
  handleClose: () => void;
}

const content = `Oraltec offre une gamme complète de services de pointe pour les dentistes, allant des prothèses dentaires sur mesure aux solutions innovantes telles que les barres implantaires, les gouttières de blanchiment, les réparations personnalisées et bien plus encore. Avec notre engagement envers la qualité, la précision et l'innovation, nous sommes le partenaire de confiance pour répondre à tous les besoins dentaires de votre pratique`;

const GenerateCard = ({
  services,
  handleClose,
  handleOpen,
  serviceActive,
  isOpen,
}: Props): JSX.Element => {
  return (
    <>
      {services.map((service) => {
        return (
          <GridItem key={service.id}>
            <Card height="100%" backgroundColor="#f4f4f4">
              <CardHeader padding={0}>
                <Img
                  src={service.servicePicture}
                  alt="Image du service"
                  height={170}
                  objectFit="cover"
                  width="100%"
                />
              </CardHeader>
              <CardBody paddingBottom={0}>
                <Stack
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  textAlign="center"
                >
                  <Img
                    alt="Icon de dents"
                    src={service.icon}
                    height="55%"
                    width="55%"
                    marginTop={{ base: '-50px', md: '-90px' }}
                  />
                  <Text>{service.title}</Text>
                </Stack>
              </CardBody>
              <CardFooter
                alignItems="center"
                justifyContent="center"
                paddingTop={0}
              >
                <Box paddingTop={10}>
                  <Button
                    size="small"
                    color="#ffd597"
                    _hover={{
                      fontFamily: 'Roboto, sans-serif',
                      color: '#ffd597',
                      textDecoration: 'underline',
                      textTransform: 'lowercase',
                      fontSize: '1.2em',
                    }}
                    onClick={() => handleOpen(service.id)}
                  >
                    {`+ d'info`}
                  </Button>
                </Box>
              </CardFooter>
            </Card>
          </GridItem>
        );
      })}
      <Modal isOpen={isOpen} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent
          h="600px"
          w="1000px"
          minHeight={{ base: '90%', md: '50%' }}
        >
          <ModalCloseButton />
          <ModalLayout serviceDetails={serviceActive} />
        </ModalContent>
      </Modal>
    </>
  );
};

const Services: React.FC = () => {
  const defaultServiceDetails: Service = {
    title: '',
    content: '',
    imagesUrls: [],
    id: 0,
    servicePicture: '',
    icon: '',
  };
  const [isOpen, setOpen] = React.useState<boolean>(false);
  const [serviceDetails, setService] = React.useState<Service>(
    defaultServiceDetails
  );

  const handleOpen = (serviceId: number) => {
    const service = servicesDetails[serviceId - 1];
    setService(service);
    setOpen(true);
  };

  const handleClose = () => {
    setService(defaultServiceDetails);
    setOpen(false);
  };

  return (
    <Container maxW="8xl">
      <Text paddingBottom={10} textAlign="center">
        {content}
      </Text>
      <Grid
        gap={4}
        justifyContent="center"
        templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }}
        templateRows={{ md: 'repeat(2, 1fr)' }}
      >
        <GenerateCard
          services={servicesDetails}
          isOpen={isOpen}
          handleClose={() => handleClose}
          handleOpen={() => handleOpen}
          serviceActive={serviceDetails}
        />
      </Grid>
    </Container>
  );
};

export default Services;
