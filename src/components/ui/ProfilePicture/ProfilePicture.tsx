import { ProfilePictureContainer } from './ProfilePicture.styled';
import defaultUserPic from '../../../assets/default-user-pic.jpg';
const ProfilePciture: React.FC<{ img?: string | null }> = ({ img }) => {
  return <ProfilePictureContainer $imagePath={img || defaultUserPic} />;
};

export default ProfilePciture;
