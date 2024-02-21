import { useState } from 'react';
import { StyledInputBox } from './Input.styled';

const Input: React.FC = () => {
  const [value, setValue] = useState('');
  return (
    <StyledInputBox>
      <input
        // id={props.id ?? props.name}
        // {...props}
        // className={inputClasses.input}
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <label
        // className={cnMerge([
        //   inputClasses.label,
        //   props.value && 'top-0 text-xs',
        // ])}
        // htmlFor={props.id ?? props.name}
        style={value ? { top: '1rem', fontSize: '0.75rem' } : undefined}
      >
        Email
      </label>
    </StyledInputBox>
  );
};

export default Input;
