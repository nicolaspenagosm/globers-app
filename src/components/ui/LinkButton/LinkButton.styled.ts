import styled from 'styled-components';

export const StyledLinkButton = styled.nav`
  background-color: transparent;
  border: none;
  a {
    color: ${({ theme }) => theme.colors.accent};
    font-size: 1rem;
    cursor: pointer;
    text-decoration: none;

    &:hover {
      color: ${({ theme }) => theme.colors.accent800};
      text-decoration: underline;
    }

    &:focus {
      color: ${({ theme }) => theme.colors.accent800};
    }
  }
`;
