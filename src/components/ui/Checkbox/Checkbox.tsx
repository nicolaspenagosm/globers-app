import { useRef } from 'react';
import { CheckboxContainer } from './Checkbox.styled';

type CheckboxProps = {
  label: string;
  id: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement> | undefined) => void;
};

const Checkbox: React.FC<CheckboxProps> = ({ label, id, onChange }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <CheckboxContainer>
      <label htmlFor={id}>{label}</label>
      <input type="checkbox" id={id} ref={inputRef} onChange={onChange} />
    </CheckboxContainer>
  );
};

export default Checkbox;
