import styled from 'styled-components';
import { ProfilePictureProps } from './ProfilePicture';

export const ProfilePictureContainer = styled.div<ProfilePictureProps>`
  width: ${({ $size }) => ($size ? $size : '5rem')};
  height: ${({ $size }) => ($size ? $size : '5rem')};
  border-radius: 50%;
  background-size: cover;
  background-position: center;
  background-color: white;
  border: solid ${({ theme }) => theme.colors.accentEmphasis};
  border-width: ${({ $borderWidth }) => ($borderWidth ? $borderWidth : '3px')};
  background-image: url(${({ $img }) => $img});
`;
