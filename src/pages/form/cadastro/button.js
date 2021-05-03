import { CurrencyDollar } from '@styled-icons/heroicons-solid/CurrencyDollar';
import {Button, Icon}from 'reactbulma'
export const ButtonForm = ({marg, cor}) => (
  <Button success style={{marginTop: marg||'20px', background: cor || "#1ABC9C"}}>
    <Icon large>
      <CurrencyDollar />
    </Icon>
    <span>Save</span>
  </Button>
);
