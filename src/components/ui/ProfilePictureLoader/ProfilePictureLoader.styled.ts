import styled from 'styled-components';

export const ProfilePictureLoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

export const TextButton = styled.button`
  background-color: transparent;
  border: none;
  text-transform: uppercase;
  font-size: 0.75rem;
  font-weight: 600;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.accentSecondary};

  &:hover {
    color: ${({ theme }) => theme.colors.accentSecondary700};
    text-decoration: underline;
  }

  &:focus{
    color: ${({ theme }) => theme.colors.accentSecondary700};
    text-decoration: underline;
  }
`;

export const HiddenInput = styled.input`
  display: none;
`;
