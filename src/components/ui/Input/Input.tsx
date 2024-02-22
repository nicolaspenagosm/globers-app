import { useState } from 'react';
import eyeIcon from '../../../assets/eye.png';
import hideEyeIcon from '../../../assets/hide-eye.png';
import { StyledInputBox, StyledP } from './Input.styled';

interface InputProps {
  label: string;
  type: 'text' | 'password';
  hasError: boolean;
  errorMsg?: string;
}

const defaultProps: Partial<InputProps> = {
  hasError: false,
  errorMsg: 'Invalid data',
};

const Input: React.FC<InputProps> = ({ label, type, hasError, errorMsg }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [value, setValue] = useState('');

  const isPasswordInput = type === 'password';

  const toggleShowPassword = () => setShowPassword((prev) => !prev);
  const showPasswordIcon = showPassword ? hideEyeIcon : eyeIcon;

  return (
    <>
      <StyledInputBox isPassword={isPasswordInput} hasError={hasError}>
        {isPasswordInput && (
          <img
            src={showPasswordIcon}
            role="button"
            alt={showPassword ? 'Hide password' : 'Show password'}
            draggable={false}
            onClick={toggleShowPassword}
          />
        )}
        <input
          onChange={(e) => setValue(e.target.value)}
          value={value}
          id={label}
          type={isPasswordInput && !showPassword ? 'password' : 'text'}
          aria-invalid={hasError ? 'true' : 'false'}
        />
        <label
          htmlFor={label}
          style={value ? { top: '0.80rem', fontSize: '0.75rem' } : undefined}
        >
          {label}
        </label>
      </StyledInputBox>
      {hasError && <StyledP>{`* ${errorMsg}`}</StyledP>}
    </>
  );
};

Input.defaultProps = defaultProps;
export default Input;
