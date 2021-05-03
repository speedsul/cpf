import React from 'react'
import { Table} from 'reactbulma'
export const ClientData = () => {
  return (
    <Table>
    <Table.Head>
      <Table.Tr>
        <Table.Th>Empresa</Table.Th>
        <Table.Th><abbr title="Mensalidade">Mens</abbr></Table.Th>
        <Table.Th><abbr title="Valor">R$</abbr></Table.Th>
      
        <Table.Th><abbr title="Data">Data</abbr></Table.Th>
        <Table.Th>Observação</Table.Th>
      </Table.Tr>
    </Table.Head>
   
    <Table.Body>
      <Table.Tr>
      
        <Table.Td><a href="https://en.wikipedia.org/wiki/Manchester_City_F.C." title="Manchester City F.C.">Manchester City</a></Table.Td>
        <Table.Td>3</Table.Td>
      
        <Table.Td>R$400,00</Table.Td>
        <Table.Td>27/08/2021</Table.Td>
        <Table.Td>Qualification for the <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Play-off_round" title="2016–17 UEFA Champions League">Champions League play-off round</a></Table.Td>
      </Table.Tr>
      <Table.Tr>
      
        <Table.Td><a href="https://en.wikipedia.org/wiki/Manchester_City_F.C." title="Manchester City F.C.">Manchester City</a></Table.Td>
        <Table.Td>3</Table.Td>
      
        <Table.Td>R$400,00</Table.Td>
        <Table.Td>27/08/2021</Table.Td>
        <Table.Td>Qualification for the <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Play-off_round" title="2016–17 UEFA Champions League">Champions League play-off round</a></Table.Td>
     </Table.Tr>
      <Table.Tr>
      
        <Table.Td><a href="https://en.wikipedia.org/wiki/Manchester_City_F.C." title="Manchester City F.C.">Manchester City</a></Table.Td>
        <Table.Td>3</Table.Td>
      
        <Table.Td>R$400,00</Table.Td>
        <Table.Td>27/08/2021</Table.Td>
        <Table.Td>Qualification for the <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Play-off_round" title="2016–17 UEFA Champions League">Champions League play-off round</a></Table.Td>
      </Table.Tr>
      <Table.Tr selected>
        
        <Table.Td><a href="https://en.wikipedia.org/wiki/Manchester_City_F.C." title="Manchester City F.C.">Manchester City</a></Table.Td>
        <Table.Td>3</Table.Td>
      
        <Table.Td>R$400,00</Table.Td>
        <Table.Td>27/08/2021</Table.Td>
        <Table.Td>Qualification for the <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Play-off_round" title="2016–17 UEFA Champions League">Champions League play-off round</a></Table.Td>
      </Table.Tr>
     
    </Table.Body>
  </Table>
  )
}
