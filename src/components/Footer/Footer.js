import React from "react";
import { Container } from "../../styles/Container.styled";
import { Company, FooterStyled, FooterText } from "../../styles/Footer.styled";

export const Footer = () => {
  return <FooterStyled>
    <Container>
      <Company>
        <FooterText>
          ТЭК России
        </FooterText>
        <FooterText fs={'10px'}>
          Функционирование и развитие
        </FooterText>
      </Company>
    </Container>
  </FooterStyled>
}