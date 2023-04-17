import styled from "styled-components";

export const FooterStyled = styled.footer`
background-color:rgb(243,243,243);
width:100%;
`
export const Company = styled.div`
padding:20px 0 20px 0;
display:flex;
flex-direction:column;
`
export const FooterText = styled.p`
font-size:${props => props.fs};
margin:0;

`

export const Img = styled.img`
width:165px;
height:80px;
`