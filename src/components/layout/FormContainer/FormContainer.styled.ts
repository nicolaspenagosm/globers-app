import styled from 'styled-components';
import { Styles } from '../../../App.styled';

export const StyledFormContainer = styled.form<{ $styles?: Styles }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  padding: 1.5rem;
  padding-top: 1.5rem;
  background-color: ${({ theme }) => theme.colors.accent};
  max-width: 40rem;
  margin-left: auto;
  margin-right: auto;
  box-shadow:
    ${({ theme }) => theme.colors.shadow} 0px 12px 15px -5px,
    ${({ theme }) => theme.colors.shadow} 0px 4px 6px -2px;
  ${({ $styles }) => $styles}
`;
