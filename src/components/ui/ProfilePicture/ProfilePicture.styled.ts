import styled from 'styled-components';

export const ProfilePictureContainer = styled.div<{ $imagePath: string }>`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  background-size: cover;
  background-position: center;
  background-color: white;
  border: 3px solid ${({ theme }) => theme.colors.accentEmphasis};
  background-image: url(${({ $imagePath }) => $imagePath});
`;
