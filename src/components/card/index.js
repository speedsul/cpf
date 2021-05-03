import React from 'react';
import { Content } from 'reactbulma';
import { CustonCard } from './style';
import user from '../../img/user.png'
export const CardClient = () => {
  return (
    <CustonCard>
      <CustonCard.Image
        src={user}
        ratio='4by3'
      />
      <CustonCard.Content>
     
        <Content>
          <h3>Ismael Strey Pereira</h3>
         <p><strong>Estado: </strong>RS</p>
         <p><strong>Cidade: </strong>Igrejinha</p>
         <p><strong>Bairro: </strong>Cohab</p>
         <p><strong>Rua: </strong>Darci Fagundes</p>
         <p><strong>Provedor: </strong>Ubinet</p>
         <p><strong>Plano: </strong>R$ 99,00</p>
         
          <small>11:09 PM - 1 Jan 2016</small>
        </Content>
      </CustonCard.Content>
    </CustonCard>
  );
};
