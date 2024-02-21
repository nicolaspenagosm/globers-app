import styled from 'styled-components';

export const StyledInputBox = styled.div`
  position: relative;
  height: 3.75rem;
  width: 100%;
  border-top-right-radius: 0.375rem;
  border-top-left-radius: 0.375rem;
  border-bottom: solid 1.5px white;
  background-color: #D7E57A;

  label {
    position: absolute;
    color: ${({ theme }) => theme.colors.primary};
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

  input {
    z-index: 10;
    width: 100%;
    height: 3rem;
    margin-top: 10px;
    border-top-right-radius: 0.375rem;
    border-top-left-radius: 0.375rem;
    background-color: transparent;
    border-color: transparent;
    padding-left: 0.875rem;
    padding-right: 0.875rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    outline: none;

    &:focus {
      + label {
        top: 1rem;
        font-size: 0.75rem;
      }
    }
  }
`;
