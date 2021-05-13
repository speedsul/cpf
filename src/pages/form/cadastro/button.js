
import { Control, Button } from 'reactbulma';
export const ButtonForm = ({ marg, cor, message }) => (
  <Control>
    <Button
      success
      style={{
        marginTop: marg || '20px',
        height: '40px',
        background: cor || '#1ABC9C',
        width: '80vw',
        padding: '10px',
        display: 'flex',
        justifyContent: 'center'
      }}
    >
      <span>
       
    
        {message || 'Button'}
      </span>
    </Button>
  </Control>
);
