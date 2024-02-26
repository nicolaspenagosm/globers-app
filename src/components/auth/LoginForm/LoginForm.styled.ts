import styled from 'styled-components';
import { Styles } from '../../../App.styled';

export const StyledForm = styled.form<{ $styles?: Styles }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  padding: 1.5rem;
  padding-top: 1.5rem;
  background-color: ${({ theme }) => theme.colors.accent};
  max-width: 40rem;
  box-shadow:
    rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
  ${({ $styles }) => $styles}
`;
