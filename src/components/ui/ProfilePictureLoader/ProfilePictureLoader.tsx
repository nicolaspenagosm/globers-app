import { useRef, useState } from 'react';
import ProfilePciture from '../ProfilePicture/ProfilePicture';
import {
  HiddenInput,
  ProfilePictureLoaderContainer,
} from './ProfilePictureLoader.styled';
import { TextButton } from './ProfilePictureLoader.styled';

const ProfilePictureLoader: React.FC<{
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}> = ({ onChange }) => {
  const [preview, setPreview] = useState<string | null>(null);
  const hiddenInputRef = useRef<HTMLInputElement>();

  const handleUploadedFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files![0] || null;
    const urlImage = URL.createObjectURL(file);
    onChange(event);
    setPreview(urlImage);
  };

  const triggerOnUpload = () => {
    hiddenInputRef.current?.click();
  };

  const uploadButtonLabel = preview ? 'Change Image' : 'Upload image';

  return (
    <ProfilePictureLoaderContainer>
      <HiddenInput
        type="file"
        accept="image/*"
        multiple={false}
        onChange={handleUploadedFile}
        ref={(e) => {
          hiddenInputRef.current = e || undefined;
        }}
      />
      <ProfilePciture $img={preview} />
      <TextButton type="button" onClick={triggerOnUpload}>
        {uploadButtonLabel}
      </TextButton>
    </ProfilePictureLoaderContainer>
  );
};

export default ProfilePictureLoader;
