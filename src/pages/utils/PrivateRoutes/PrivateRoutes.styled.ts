import styled from 'styled-components';

export const Main = styled.main`
  padding: 8rem 4rem 4rem 4rem;
  background-color: ${({ theme }) => theme.colors.bgAlt};
  height: 100vh;
  overflow-y: scroll;
`;
