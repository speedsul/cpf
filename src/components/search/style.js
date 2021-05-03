import styled from 'styled-components';
import { Input } from 'reactbulma';
import CpfCnpj from '@react-br-forms/cpf-cnpj-mask';
import {Link} from 'react-router-dom'

export const Form = styled.span`margin-top: 20px;`
export const SerchInput = styled(Input)`
  width: 60vw;
  margin: 0 auto;
 
  height: 60px;
  text-align: center;
  font-size: 40px;
  font-weight: bold;
  font-family: 'roboto';
  color: gray;
  @media(max-width: 800px){
    width: 90vw;
  }
`;
export const Content = styled.div`

display: flex;
justify-content:center;
align-items: center;  
@media(max-width: 1000px) {
    flex-direction: column;  
    padding-bottom: 20%; 
     }
div{
  
  margin: 20px;
 
}
table {
  
  margin: 20px;
}
`
export const SerchCpf = styled(CpfCnpj)`
  width: 80vw;
  align-content: center;
  height: 80px;
  text-align: center;
  font-size: 40px;
  font-weight: bold;
  font-family: 'roboto';
  color: gray;
  background: aliceblue;
`;
export const Button = styled(Link)`
z-index: 50;
display:block;
height: 80px;
width: 80px;
border-radius: 50%;
border: 5px solid aliceblue;
position: fixed;
right: 50px;
bottom: 50px;
cursor: pointer;
color: aliceblue; 
background: tomato;
&:hover{
  color: #6c3c37;

border: 5px solid #6c3c37;
}
  

`
