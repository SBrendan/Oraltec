import { Box } from '@chakra-ui/react';

import Hero from '~/lib/components/ Hero';
import Contact from '~/lib/components/Contact';
import Hardware from '~/lib/components/Hardware';
import IconCards from '~/lib/components/IconCards';
import Services from '~/lib/components/Services';
import Team from '~/lib/components/Team';
import WhoWeAre from '~/lib/components/WhoWeAre';
import SectionLayout from '~/lib/layout/SectionLayout';

const Home = () => {
  return (
    <Box as="main">
      <Hero />
      <IconCards />
      <SectionLayout
        title="Qui Sommes-nous ?"
        sections={<WhoWeAre />}
        backgroundColor="#ffffff"
        id="who"
        mainTitle
      />
      <SectionLayout
        title="L'équipe"
        sections={<Team />}
        backgroundColor="#f5f5f5"
        id="team"
      />
      <SectionLayout
        title="Produits / Services"
        sections={<Services />}
        backgroundColor="#ffffff"
        id="service"
        mainTitle
      />
      <SectionLayout
        title="équipement"
        sections={<Hardware />}
        backgroundColor="#f5f5f5"
        id="equipement"
      />
      <SectionLayout
        title="contact"
        sections={<Contact />}
        backgroundColor="#ffffff"
        id="contact"
        mainTitle
      />
    </Box>
  );
};

export default Home;
