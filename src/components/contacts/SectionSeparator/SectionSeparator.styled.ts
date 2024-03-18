import styled from 'styled-components';

export const StyledSectionSeparator = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  gap: 1rem;
  h2 {
    font-size: 2.5rem;
    gap: 1rem;
    text-wrap: nowrap;
  }
  span {
    background-color: ${({ theme }) => theme.colors.accent};
    height: 2px;
    width: 100%;
  }
`;
