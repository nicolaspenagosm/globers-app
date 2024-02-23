import styled from 'styled-components';

export const StyledLinkButton = styled.button`
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.accent};
  font-size: 1rem;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.colors.accent800};
    text-decoration: underline;

  }
`;
