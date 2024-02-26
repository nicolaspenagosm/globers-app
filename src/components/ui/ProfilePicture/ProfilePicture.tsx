import { ProfilePictureContainer } from './ProfilePicture.styled';
import defaultUserPic from '../../../assets/default-user-pic.jpg';

export interface ProfilePictureProps {
  $img?: string | null;
  $size?: string;
  $borderWidth?:string
}
const ProfilePciture: React.FC<ProfilePictureProps> = ({ $img, $size, $borderWidth }) => {
  return (
    <ProfilePictureContainer
      $img={$img || defaultUserPic}
      $size={$size}
      $borderWidth={$borderWidth}
    />
  );
};

export default ProfilePciture;
