import styled from 'styled-components';

export const StyledInput = styled.div<{
  $isPassword: boolean;
  $hasError: boolean;
}>`
  position: relative;
  height: 2.75rem;
  width: 100%;
  border-top-right-radius: 0.375rem;
  border-top-left-radius: 0.375rem;
  border-bottom: solid 2px;
  border-color: ${({ theme, $hasError }) =>
    $hasError ? theme.colors.warning : theme.colors.secondary};
  background-color: ${({ theme }) => theme.colors.accent400};

  label {
    position: absolute;
    color: ${({ theme }) => theme.colors.primary400};
    left: 0.75rem;
    top: 50%;
    transform: translateY(-50%);
    z-index: 0;
    padding-left: 0.25rem;
    padding-right: 0.25rem;
    font-size: 1rem;
    pointer-events: none;
    transition-duration: 0.2s;
  }

  img {
    position: absolute;
    right: 0.75rem;
    top: 50%;
    transform: translateY(-50%);
    width: 1.125rem;
    cursor: pointer;
    &:hover {
      opacity: 0.5;
    }
  }

  input {
    z-index: 10;
    width: 100%;
    height: 3rem;
    margin-top: 4px;
    border-top-right-radius: 0.375rem;
    border-top-left-radius: 0.375rem;
    background-color: transparent;
    border-color: transparent;
    padding-left: 0.875rem;
    padding-right: ${({ $isPassword }) =>
      $isPassword ? '2.25rem' : '0.875rem'};
    outline: none;

    &:focus {
      + label {
        top: 0.8rem;
        font-size: 0.75rem;
      }
    }
  }
`;

export const P = styled.p`
  margin-top: 4px;
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.warning};
  margin-left: 0.75rem;
  text-align: left;
`;

export const InputBox = styled.div`
  width: 100%;
`;
