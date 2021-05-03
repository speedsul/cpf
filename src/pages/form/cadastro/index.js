import React from 'react';
import './styles.css';
import { ReturnUpBack } from '@styled-icons/ionicons-outline/ReturnUpBack';
import { Input } from 'reactbulma';
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
          <label htmlFor='nome'>Nome</label>
          <Input id='nome' />

          <label htmlFor='cpf'>CPF</label>
          <Input id='cpf' />

          <label htmlFor='fone'>Fone/Wats:</label>
          <Input id='fone' />

          <label htmlFor='e-mail'>E-mail:</label>
          <Input id='e-mail' />

          <label htmlFor='endereco'>Endereço</label>
          <Input id='endereco' />

          <label htmlFor='estado'>Estado</label>
          <SelectState value={estados} name='estados' id='estado' />

          <label htmlFor='cidade'>Cidade</label>
          <Input id='cidade' />

          <label htmlFor='normal'>Valor</label>
          <Input id='normal' />
          <ButtonForm />
        </div>
      </Form>
      <Button to='/'>
        <ReturnUpBack title='Adicionar Novo Registro' />
      </Button>
    </>
  );
}

export default Cadastro;
