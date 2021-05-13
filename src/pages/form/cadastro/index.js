import React from 'react';
import './styles.css';
import { ReturnUpBack } from '@styled-icons/ionicons-outline/ReturnUpBack';
import { UserCircle } from '@styled-icons/boxicons-regular/UserCircle';
import { DocumentPageNumber } from '@styled-icons/fluentui-system-filled/DocumentPageNumber';
import { Phone } from '@styled-icons/boxicons-regular/Phone';
import { EmailOutline } from '@styled-icons/evaicons-outline/EmailOutline';
import { Address } from '@styled-icons/entypo/Address';
import { Global } from '@styled-icons/remix-line/Global';
import { City } from '@styled-icons/boxicons-solid/City';
import { MoneyBillAlt } from '@styled-icons/fa-regular/MoneyBillAlt';

import { Input, Control, Icon } from 'reactbulma';
import { ButtonForm } from './button';

import { Button, Form, SelectState, HeaderForm } from './style';
const estados = [
  { nome: 'Acre', sigla: 'AC' },
  { nome: 'Alagoas', sigla: 'AL' },
  { nome: 'Amapá', sigla: 'AP' },
  { nome: 'Amazonas', sigla: 'AM' },
  { nome: 'Bahia', sigla: 'BA' },
  { nome: 'Ceará', sigla: 'CE' },
  { nome: 'Distrito Federal', sigla: 'DF' },
  { nome: 'Espírito Santo', sigla: 'ES' },
  { nome: 'Goiás', sigla: 'GO' },
  { nome: 'Maranhão', sigla: 'MA' },
  { nome: 'Mato Grosso', sigla: 'MT' },
  { nome: 'Mato Grosso do Sul', sigla: 'MS' },
  { nome: 'Minas Gerais', sigla: 'MG' },
  { nome: 'Pará', sigla: 'PA' },
  { nome: 'Paraíba', sigla: 'PB' },
  { nome: 'Paraná', sigla: 'PR' },
  { nome: 'Pernambuco', sigla: 'PE' },
  { nome: 'Piauí', sigla: 'PI' },
  { nome: 'Rio de Janeiro', sigla: 'RJ' },
  { nome: 'Rio Grande do Norte', sigla: 'RN' },
  { nome: 'Rio Grande do Sul', sigla: 'RS' },
  { nome: 'Rondônia', sigla: 'RO' },
  { nome: 'Roraima', sigla: 'RR' },
  { nome: 'Santa Catarina', sigla: 'SC' },
  { nome: 'São Paulo', sigla: 'SP' },
  { nome: 'Sergipe', sigla: 'SE' },
  { nome: 'Tocantins', sigla: 'TO' },
];
function Cadastro() {
  return (
    <>
      <Form>
        <HeaderForm>Novo Registro</HeaderForm>

        <div>
          <Control hasIconsRight>
            <Input placeholder='Nome' />
            <Icon right>
              <UserCircle />
            </Icon>
          </Control>

          <Control hasIconsRight>
            <Input placeholder='CPF' />
            <Icon right>
              <DocumentPageNumber />
            </Icon>
          </Control>
          <Control hasIconsRight>
            <Input placeholder='Fone/Wats' />
            <Icon right>
              <Phone />
            </Icon>
          </Control>
          <Control hasIconsRight>
            <Input placeholder='Email' type='email' />
            <Icon right>
              <EmailOutline />
            </Icon>
          </Control>
          <Control hasIconsRight>
            <Input placeholder='Endereço' />
            <Icon right>
              <Address />
            </Icon>
          </Control>
          <Control hasIconsRight>
            <SelectState value={estados} name='estados' id='estado' />
            <Icon right>
              <Global />
            </Icon>
          </Control>
          <Control hasIconsRight>
            <Input placeholder='Cidade' />
            <Icon right>
              <City />
            </Icon>
          </Control>
          <Control hasIconsRight>
            <Input placeholder='Valor' />
            <Icon right>
              <MoneyBillAlt />
            </Icon>
          </Control>
          <Control><ButtonForm message="Salvar" marg='10px' /></Control>
          
        </div>
      </Form>
      <Button to='/'>
        <ReturnUpBack title='Adicionar Novo Registro' />
      </Button>
    </>
  );
}

export default Cadastro;
