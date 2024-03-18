import { StyledProfilePicture, ProfilePicturePlaceHolder as ProfilePicturePlaceholder } from './ProfilePicture.styled';
import defaultUserPic from '../../../assets/default-user-pic.jpg';

export interface ProfilePictureProps {
  $img?: string | null;
  $size?: string;
  $borderWidth?: string;
  isPlaceholder?: boolean;
}
const ProfilePciture: React.FC<ProfilePictureProps> = ({
  $img,
  $size,
  $borderWidth,
  isPlaceholder,
}) => {
  if (isPlaceholder) return <ProfilePicturePlaceholder $size={$size} />;
  return (
    <StyledProfilePicture
      $img={$img || defaultUserPic}
      $size={$size}
      $borderWidth={$borderWidth}
    />
  );
};

export default ProfilePciture;
