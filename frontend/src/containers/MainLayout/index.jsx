import React from 'react';
import { Container } from '../../features/Home/components/Container/Container.styles';
import Footer from '../../features/Home/components/Footer';
import Header from '../../features/Home/components/Header';
import { Section } from '../../features/Home/components/Section/Section.styles';
import { HomepageContainer } from '../../features/Home/pages/HomePage/Homepage.styles';

const MainLayout = ({ children }) => {
   return (
      <HomepageContainer style={{}}>
         <Header />
         <Section style={{ paddingTop: '20px', paddingBottom: '70px' }}>
            <Container>{children}</Container>
         </Section>
         <Footer />
      </HomepageContainer>
   );
};

export default MainLayout;
