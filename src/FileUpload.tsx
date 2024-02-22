import React, { useState } from 'react';

import { useAppDispatch } from './store';
import { login, logout } from './store/auth-slice/auth-actions';
import LoginForm from './components/auth/LoginForm';

const FileUpload: React.FC = () => {
  const dispatch = useAppDispatch();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      dispatch(
        login(
          {
            email: 'teeees@gmail.com',
            password: 'jeasdasdasd',
            returnSecureToken: true,
          },

          () => {
            console.log('callback');
          },
        ),
      );

      return;
    }

    try {
      const formData = new FormData();
      formData.append('file', selectedFile);
    } catch (error) {
      console.error('An error occurred while uploading the file:', error);
    }
  };

  return (
    <>
      <div role="tabls">
        <input type="file" onChange={handleFileChange} />
        <button onClick={handleUpload}>Login</button>
      </div>
      <div>
        <button>Server Sent Event </button>
        <button
          onClick={() => {
            handleLogout();
          }}
        >
          logout{' '}
        </button>
      </div>
      <LoginForm/>
    </>
  );
};

export default FileUpload;
