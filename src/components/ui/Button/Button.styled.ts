import styled from 'styled-components';
import { Styles } from '../../../App.styled';

export const StyledButton = styled.button<{
  $styles?: Styles;
  $hoverStyles?: Styles;
}>`
  font-weight: 600;
  letter-spacing: 0.1em;
  display: flex;
  gap: 0.75rem;
  align-items: center;
  padding: 0.45rem 0.85rem 0.45rem 0.85rem;
  border-radius: 0.5rem;
  box-shadow: 0px 3px 5px 0px rgba(140, 149, 159, 0.3);
  text-transform: uppercase;
  border: solid 1px;
  width: fit-content;
  cursor: pointer;

  &:focus {
    outline: solid 2px ${({ theme }) => theme.colors.accent400};
  }

  ${({ $styles }) => $styles}

  &:hover {
    ${({ $hoverStyles }) => $hoverStyles}
  }

  span {
    height: 0.75rem;
    display: flex;
    align-items: center;
    font-size: 0.75rem;
    color:inherit;
  }

  img {
    width: 0.75rem;
  }
`;
