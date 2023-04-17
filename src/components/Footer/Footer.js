import React from "react";
import { Container } from "../../styles/Container.styled";
import { Company, FooterStyled, FooterText, Img } from "../../styles/Footer.styled";

export const Footer = () => {
  return <FooterStyled>
    <Container>
      <Company>
        <FooterText>
          ТЭК РОССИИ
        </FooterText>
        <FooterText fs={'10px'}>
          Функционирование и развитие
        </FooterText>
        <Img src="l1.jpg" />
      </Company>
    </Container>
  </FooterStyled>
}