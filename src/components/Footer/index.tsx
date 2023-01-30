import React from 'react';

import { Container, FooterText } from './style';

const Footer: React.FC = () => {
  return (
    <Container>
      <FooterText>Footer</FooterText>
      <a
        href="/"
        target="_blank"
        rel="noopener noreferrer"
      >
      </a>
    </Container>
  );
};

export default Footer;