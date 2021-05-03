import React, { useState } from 'react';
import { Control, Icon } from 'reactbulma';
import { cpf } from 'cpf-cnpj-validator';
import { SerchInput, Content, Button, Form } from './style';
import { UserSearch, UserAdd } from '@styled-icons/remix-line/';
import { CardClient } from '../card';
import { ClientData } from '../table';
export const Search = () => {
  const [clientCpf, setClientCpf] = useState('');
  const validaCpf = (e) => {
    let value = e.target.value;

    if (value.length > 10) {
      console.log(clientCpf);
    }
    setClientCpf(cpf.format(value));
  };
  return (
    <>
      <Form>
        <Control hasIconsLeft>
          <SerchInput
            placeholder='CPF'
            value={clientCpf}
            large
            onChange={(e) => validaCpf(e)}
          />
          <Icon left>
            <UserSearch />
          </Icon>
        </Control>
      </Form>

      {cpf.isValid(clientCpf) && (
        <Content>
          <CardClient />
          <ClientData />
        </Content>
      )}

      <Button to='/cadastro'>
        <UserAdd title='Adicionar Novo Registro' />
      </Button>
    </>
  );
};
