import styled from "styled-components";


export const Container = styled.div`
margin:${props => props.margin || "0 auto"};
max-width:${props => props.mw || "1170px"};
background-color:${props => props.bc};
height:${props => props.height};
display:${props => props.display};
flex-direction:${props => props.fd};
position:${props => props.pos};
min-height:${props => props.mh};
`