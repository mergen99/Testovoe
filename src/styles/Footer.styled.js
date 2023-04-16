import styled from "styled-components";

export const FooterStyled = styled.footer`
background-color:rgb(217, 217, 217);
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