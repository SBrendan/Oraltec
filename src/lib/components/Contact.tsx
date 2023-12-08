'use client';

import {
  Box,
  Container,
  List,
  ListIcon,
  ListItem,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import 'mapbox-gl/dist/mapbox-gl.css';
import React from 'react';
import { FaAt, FaClock, FaMap, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import Map, { Marker } from 'react-map-gl';

const Contact: React.FC = () => {
  const [viewState, setViewState] = React.useState({
    latitude: 48.2538059,
    longitude: -1.417573,
    zoom: 15,
  });

  return (
    <Container maxW="7xl">
      <SimpleGrid columns={{ base: 1, md: 2 }} gap={10}>
        <Box>
          <Map
            mapStyle="mapbox://styles/mapbox/streets-v9"
            mapboxAccessToken={process.env.MAP_BOX_API}
            onMove={(e) => setViewState(e.viewState)}
            {...viewState}
            style={{ width: '100%', height: '385px' }}
          >
            <Marker latitude={48.2543} longitude={-1.417573}>
              <FaMapMarkerAlt size="30px" color="#DB8024" />
              <Text>Oraltec</Text>
            </Marker>
          </Map>
        </Box>
        <Box>
          <List spacing={3} position="relative" pt="8px" pb="8px">
            <ListItem
              borderBottom="1px solid rgba(0, 0, 0, 0.12)"
              background-clip="padding-box"
              display="flex"
              position="relative"
              boxSizing="border-box"
              textAlign="left"
              alignItems="center"
              justifyContent="flex-start"
              textDecoration="none"
              pt="1em"
              pb="1em"
            >
              <ListIcon
                color="#DB8024"
                as={FaClock}
                display="inline-flex"
                minW="56px"
              />
              <Box>
                <Text
                  color="#DB8024"
                  textTransform="uppercase"
                  fontWeight="bold"
                >
                  Horaires
                </Text>
                <Text color="#74787b" fontSize="0.875rem">
                  Le laboratoire est ouvert du lundi au vendredi de 8h30 à 12h30
                  et de 14h à 18h
                </Text>
              </Box>
            </ListItem>
            <ListItem
              borderBottom="1px solid rgba(0, 0, 0, 0.12)"
              background-clip="padding-box"
              display="flex"
              position="relative"
              boxSizing="border-box"
              textAlign="left"
              alignItems="center"
              justifyContent="flex-start"
              textDecoration="none"
              pt="1em"
              pb="1em"
            >
              <ListIcon
                color="#DB8024"
                as={FaMap}
                display="inline-flex"
                minW="56px"
              />
              <Box>
                <Text
                  color="#DB8024"
                  textTransform="uppercase"
                  fontWeight="bold"
                >
                  Adresse
                </Text>
                <Text color="#74787b" fontSize="0.875rem">
                  1 Rue d&apos;Anjou <br /> 35140 SAINT-AUBIN-DU-CORMIER
                </Text>
              </Box>
            </ListItem>
            <ListItem
              borderBottom="1px solid rgba(0, 0, 0, 0.12)"
              background-clip="padding-box"
              display="flex"
              position="relative"
              boxSizing="border-box"
              textAlign="left"
              alignItems="center"
              justifyContent="flex-start"
              textDecoration="none"
              pt="1em"
              pb="1em"
            >
              <ListIcon
                color="#DB8024"
                as={FaPhone}
                display="inline-flex"
                minW="56px"
              />
              <Box>
                <Text
                  color="#DB8024"
                  textTransform="uppercase"
                  fontWeight="bold"
                >
                  Téléphone
                </Text>
                <Text color="#74787b" fontSize="0.875rem">
                  02 99 39 72 52
                </Text>
              </Box>
            </ListItem>
            <ListItem
              borderBottom="1px solid rgba(0, 0, 0, 0.12)"
              background-clip="padding-box"
              display="flex"
              position="relative"
              boxSizing="border-box"
              textAlign="left"
              alignItems="center"
              justifyContent="flex-start"
              textDecoration="none"
              pt="1em"
              pb="1em"
            >
              <ListIcon
                color="#DB8024"
                as={FaAt}
                display="inline-flex"
                minW="56px"
              />
              <Box>
                <Text
                  color="#DB8024"
                  textTransform="uppercase"
                  fontWeight="bold"
                >
                  Mail
                </Text>
                <Text color="#74787b" fontSize="0.875rem">
                  contact@oraltec.fr
                </Text>
              </Box>
            </ListItem>
          </List>
        </Box>
      </SimpleGrid>
    </Container>
  );
};

export default Contact;
