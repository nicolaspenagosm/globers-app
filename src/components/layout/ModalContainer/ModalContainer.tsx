import 'animate.css';
import { createPortal } from 'react-dom';
import {
  Backdrop,
  RootContainer,
  StyledModalContainer,
} from './ModalContainer.styled';
import { useEffect } from 'react';

const ModalContainer: React.FC<{
  children: React.ReactNode;
  onClose: () => void;
}> = ({ children, onClose }) => {
  useEffect(() => {
    document.body.style.overflowY = 'hidden';
    return () => {
      document.body.style.overflowY = 'unset';
    };
  }, []);
  return createPortal(
    <RootContainer>
      <Backdrop onClick={onClose} />
      <StyledModalContainer className="animate__animated animate__bounceInDown">
        {children}
      </StyledModalContainer>
    </RootContainer>,

    document.body,
  );
};

export default ModalContainer;
