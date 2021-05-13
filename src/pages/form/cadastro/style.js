import styled from 'styled-components';
import { Input } from 'reactbulma';
import CpfCnpj from '@react-br-forms/cpf-cnpj-mask';
import { Link } from 'react-router-dom';
import { FormSelect } from './select';

export const SelectState = styled(FormSelect)`
  background: red;
`;
export const SerchInput = styled(Input)`
  width: 60vw;
  margin: 0 auto;

  height: 60px;
  text-align: center;
  font-size: 40px;
  font-weight: bold;
  font-family: 'roboto';
  color: gray;
  @media (max-width: 800px) {
    width: 90vw;
  }
`;
export const Content = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 900px) {
    flex-direction: column;
  }
  div {
    margin: 20px;
  }
  table {
    margin: 20px;
  }
`;
export const SerchCpf = styled(CpfCnpj)`
  width: 80vw;
  align-content: center;
  height: 80px;
  text-align: center;
  font-size: 40px;
  font-weight: bold;
  font-family: 'roboto';
  color: gray;
  /* background: aliceblue; */
`;
export const HeaderForm = styled.div`
margin-bottom: 10px;
font-size:2em;
color: #34495E;
text-align: center;
font-weight: bold;
border-width: 0px 20px 20px 20px;
border-radius:  0px 0px 50px 50px;
border-style: solid;
color: aliceblue;
border-color: var(--header);
background-color:var(--header);

`
export const Button = styled(Link)`
  z-index: 50;
  display: block;
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
  &:hover {
    color: #6c3c37;

    border: 5px solid #6c3c37;
  }
`;
export const Form = styled.span`
  display: flex;
  align-items: center;
  align-content: center;
  flex-direction: column;
  
  div {
    width: 80vw;    
    flex-direction: column; 
       
  }
 input, span, select {
   height: 40px;margin: 10px 0px;
 }
`;
