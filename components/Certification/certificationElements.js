import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Container = styled.div`
min-height : 692px;
position: fixed;
bottom: 0;
left: 0;
right: 0;
top: 0;
z-index: 0;
overflow: auto;
background: linear-gradient(
    108deg,
    rgba(10, 15, 28, 0.63) 100%,
    rgba(1, 1, 1, 1) 0%
);
`;

export const Icon = styled(Link)`
margin-left: 32px;
margin-top: 32px;
text-decoration: none;
color: #fff;
font-weight: 700;
font-size: 32px;

@media screen and (max-width: 480px){
    margin-left: 16px;
    margin-top: 8px;
}
`;

export const Form = styled.form`
background: white;
max-width: 500px;
max-height: 1000px;

height: auto;
width: 100%;
z-index: 1;
display: grid;
margin: 0 auto;
margin-top: 15px;
padding: 10px 10px;
border-radius: 4px;
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

`;
export const CertificateIcon = styled.img`
height: 100%;
width: 100%;

`