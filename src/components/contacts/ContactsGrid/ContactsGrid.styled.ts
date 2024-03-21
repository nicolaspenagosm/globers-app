import styled from 'styled-components';

export const StyledContactGrid = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 3rem;
  row-gap: 3rem;
  width: 100%;
  justify-content: center;
  align-content: center;

  @media (min-width: ${({ theme }) => theme.responsiveBreakpoints.mobile}px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;
