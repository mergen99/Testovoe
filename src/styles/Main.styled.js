import styled from "styled-components";

export const MainStyled = styled.main`
`
export const Inner = styled.div`
display:flex;
justify-content:${props => props.jc || 'space-between'};
margin-top:${props => props.mt};
max-width:${props => props.mw};
margin-bottom:${props => props.mb};
`
export const InnerLeft = styled.div`
max-width:${props => props.mw || "760px"};
display:${props => props.dy || 'flex'};
align-items:${props => props.ai || 'center'};
max-height:${props => props.mh};
flex-direction:${props => props.fd};
`
export const InnerRight = styled.div`
position:${props => props.pos};
display:flex;
max-width:${props => props.mw || '130px'};
height:${props => props.ht || '40px'};
margin-top:${props => props.mr};
margin-left:${props => props.ml};

`
export const Text = styled.p`
position:${props => props.pos};
top:${props => props.top};
left:${props => props.left};
font-family:"Yeseva One";
font-size:${props => props.fs || "37px"};
margin:${props => props.mr};
font-weight:${props => props.fw};
color:${props => props.color};
width:${props => props.wd};
`
export const Line = styled.div`
margin-top:${props => props.mt || '2px'};
height:${props => props.ht || '1.7px'};
width:${props => props.wd || '20px'};
background-color:${props => props.bc || 'black'};
`
export const Button = styled.button`
border:none;
margin-left:${props => props.ml};
margin-top:${props => props.mt};
outline:none;
border-radius:5px;
padding:${props => props.padd};
font-size:${props => props.fs || '15px'};
max-width:${props => props.mw};
width:${props => props.wd};
height:${props => props.ht};
display:${props => props.dy};
justify-content:${props => props.jc};
background-color:${props => props.bc};
color:${props => props.cr};
`
