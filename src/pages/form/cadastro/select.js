export const FormSelect = ({ name, value }) => (
  <select name={name} className='estados-uf'>
    {value.map((val) => (
      <option value={val.sigla} key={val.nome}>{val.nome}</option>
    ))}
  </select>
);
