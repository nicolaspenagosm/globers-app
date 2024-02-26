import { useState } from 'react';
import eyeIcon from '../../../assets/eye.png';
import hideEyeIcon from '../../../assets/hide-eye.png';
import { StyledInput, P, InputBox } from './Input.styled';

interface InputProps {
  label: string;
  type: 'text' | 'password';
  hasError: boolean;
  errorMsg?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  isRequired: boolean;
}

const defaultProps: Partial<InputProps> = {
  hasError: false,
  errorMsg: 'Invalid data',
};

const Input: React.FC<InputProps> = ({
  label,
  type,
  hasError,
  errorMsg,
  onChange,
  value,
  isRequired,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const isPasswordInput = type === 'password';

  const toggleShowPassword = () => setShowPassword((prev) => !prev);
  const showPasswordIcon = showPassword ? hideEyeIcon : eyeIcon;

  return (
    <InputBox>
      <StyledInput $isPassword={isPasswordInput} $hasError={hasError}>
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
          onChange={onChange}
          value={value}
          id={label}
          type={isPasswordInput && !showPassword ? 'password' : 'text'}
          aria-invalid={hasError ? 'true' : 'false'}
          autoComplete="off"
          aria-required={isRequired}
          aria-describedby={`${label}Msg`}
        />
        <label
          htmlFor={label}
          style={value ? { top: '0.80rem', fontSize: '0.75rem' } : undefined}
        >
          {label}
        </label>
      </StyledInput>
      {hasError && (
        <P
          role="alert"
          aria-live="assertive"
          id={`${label}Msg`}
        >{`* ${errorMsg}`}</P>
      )}
    </InputBox>
  );
};

Input.defaultProps = defaultProps;
export default Input;
