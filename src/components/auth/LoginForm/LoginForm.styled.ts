import styled from 'styled-components';

export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
`;
export const ErrorMsg = styled.p`
  color: ${({ theme }) => theme.colors.warning700};
`;

export const ErrorIcon = styled.img`
  width: 1.2rem;
`;
