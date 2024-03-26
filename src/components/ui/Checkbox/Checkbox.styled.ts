import styled from 'styled-components';

export const CheckboxContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  input[type='checkbox'] {
    accent-color: ${({ theme }) => theme.colors.primary400};
  }
`;
