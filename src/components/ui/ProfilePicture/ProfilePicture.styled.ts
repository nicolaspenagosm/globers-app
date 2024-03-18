import styled from 'styled-components';
import { ProfilePictureProps } from './ProfilePicture';

const ProfilePictureContainer = styled.div<ProfilePictureProps>`
  width: ${({ $size }) => ($size ? $size : '5rem')};
  height: ${({ $size }) => ($size ? $size : '5rem')};
  border-radius: 50%;
`;

export const StyledProfilePicture = styled(ProfilePictureContainer)`
  background-size: cover;
  background-position: center;
  background-color: white;
  border: solid ${({ theme }) => theme.colors.accent};
  border-width: ${({ $borderWidth }) => ($borderWidth ? $borderWidth : '3px')};
  background-image: url(${({ $img }) => $img});
`;

export const ProfilePicturePlaceHolder = styled(ProfilePictureContainer)`
  background-color: ${({ theme }) => theme.colors.bgAlt};
`;
